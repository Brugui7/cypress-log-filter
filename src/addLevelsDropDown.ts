import {createDropDownMenuItem, createMoreOptionsButton, createMoreOptionsDiv } from "./html";
import {createStyle} from "./css";
import {debounce} from "./common";

export const addLevelsDropDown = () => {
    const alreadyAdded = top.document.querySelector('#logLevelDiv')
    if (alreadyAdded) {
        return null;
    }

    const testingPreferencesDiv = top.document.querySelector('#unified-reporter header');

    if (!testingPreferencesDiv) {
        return null;
    }

    const container = top.document.createElement('div');
    container.className = 'cypress-log-filter-container';
    container.appendChild(createStyle());
    container.appendChild(createDropDownMenuItem());
    container.appendChild(createMoreOptionsButton());
    testingPreferencesDiv.appendChild(container);
    testingPreferencesDiv.appendChild(createMoreOptionsDiv());
    handleDropdown();
    handleMoreOptionsButton();
    handleInputSearch();
    setUpLogLevels();
    return null;
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

const handleMoreOptionsButton = () => {
    const moreOptionsContainer: HTMLElement = top.document.querySelector('#moreOptionsContainer');
    const moreOptionsBtn: HTMLElement = top.document.querySelector('#moreOptionsBtn');
    const inputSearch: HTMLInputElement = top.document.querySelector('#inputSearch');

    moreOptionsBtn.addEventListener('click', () => {
        moreOptionsContainer.style.display = moreOptionsContainer.style.display === 'flex' ? 'none' : 'flex';
        inputSearch.value = '';
        resetSearchResults();
    });
}

const handleInputSearch = () => {
    const inputSearch: HTMLInputElement = top.document.querySelector('#inputSearch');
    inputSearch.addEventListener('input',
        debounce(() => {
            const searchTerm = inputSearch.value.toUpperCase().trim();
            resetSearchResults();


            if (!searchTerm) {
                return;
            }

            top.document.querySelectorAll('li[class^="command"]').forEach((li: HTMLLIElement) => {
                console.log(li);
                if (!li.textContent.toUpperCase().includes(searchTerm)) {
                    li.classList.add('hide-search-result');
                }
            });
        }, 600)
    );

};

const resetSearchResults = () => {
    top.document.querySelectorAll('.hide-search-result').forEach(element => {
        element.classList.remove('hide-search-result');
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
