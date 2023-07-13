export const addLevelsDropDown = () => {
    const alreadyAdded = top.document.querySelector('#logLevelDiv')
    if (alreadyAdded) {
        return null;
    }

    const testingPreferencesDiv = top.document.querySelector('#unified-reporter header');
    testingPreferencesDiv.appendChild(createStyle());
    testingPreferencesDiv.appendChild(createDropDownMenuItem());
    handleDropdown();
    setUpLogLevels();
    return null;
}

const createStyle = () => {
    const reporterStyleEl = document.createElement('style');
    reporterStyleEl.setAttribute('id', 'logHandlerDivStyle');
    reporterStyleEl.innerHTML = `
        .dropdown {
          position: relative;
          display: inline-block;
        }
        
        .dropdown-toggle {
          background-color: #272c33;
          color: #fff;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
        }
        
        .dropdown-toggle .dropdown-icon {
          fill: #fff;
          width: 12px;
          height: 12px;
          margin-left: 5px;
          vertical-align: middle;
        }
        
        .dropdown-menu {
          top: 100%;
          left: 0;
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 0;
          margin-top: 5px;
          list-style: none;
          display: none;
        }
        
        .dropdown-menu li {
          cursor: pointer;
          color: #000;
          padding: 10px;
        }
        
        .dropdown-menu li:hover {
          background-color: #f0f0f0;
        }
    `;
    return reporterStyleEl;
}

const createDropDownMenuItem = () => {
    const dropdown = top.document.createElement('div');
    dropdown.className = 'dropdown';
    dropdown.id = 'logLevelDiv';
    dropdown.innerHTML = `
      <button class="dropdown-toggle">
        <span id="logLevelSelected">Log level</span> 
        <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 15.5l-6-6 1.41-1.41L12 12.68l4.59-4.59L18 9.5l-6 6z"/>
        </svg>
      </button>
      <ul class="dropdown-menu">
        <li>VERBOSE</li>
        <li>INFO</li>
        <li>ASSERT</li>
        <li>ERROR</li>
      </ul>
    `;
    return dropdown;
}

const handleDropdown = () => {
    const dropdownToggle: HTMLElement = top.document.querySelector('.dropdown-toggle');
    const dropdownMenu: HTMLElement = top.document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    const dropdownOptions = dropdownMenu.querySelectorAll('li');
    dropdownOptions.forEach((option) => {
        option.addEventListener('click', () => {
            dropdownMenu.style.display = 'none';
            setUpLogLevels(option.textContent);
        });
    });
}

const setUpLogLevels = (levelSelected?) => {
    top.document.querySelector('#logLevelStyle')?.remove();

    const defaultLogLevel = Cypress.env('LOG_LEVEL') ? Cypress.env('LOG_LEVEL') : Cypress.env('logLevel');
    const logLevel = levelSelected ? levelSelected : defaultLogLevel;

    const dropdownToggle = top.document.querySelector('.dropdown-toggle');
    dropdownToggle.querySelector('#logLevelSelected').textContent = logLevel ? logLevel : 'Log Level';

    if (!logLevel || logLevel.toUpperCase() === 'VERBOSE') {
        return;
    }

    const style = top.document.createElement("style");
    style.id = 'logLevelStyle';
    style.innerHTML = "li[class*='command-name'] { display: none }";


    switch (logLevel.toUpperCase()) {
        case 'INFO':
            style.innerHTML += " li[class*='command-name-log'] { display: block } ";
            // falls through
        case 'ASSERT':
            style.innerHTML += " li[class*='command-name-assert'] { display: block } ";
            // falls through
        case 'ERROR':
            style.innerHTML += " li[class*='command-name-error'] { display: block } ";
    }

    window.top.document.head.appendChild(style);
}
