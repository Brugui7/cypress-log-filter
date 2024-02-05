export const createMoreOptionsButton = () => {
    const btn = top.document.createElement('button');
    btn.id = 'moreOptionsBtn';
    btn.className = 'btn';
    btn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="6" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="12" cy="18" r="2"/>
        </svg>
    `
    return btn;
}

export const createDropDownMenuItem = () => {
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

export const createMoreOptionsDiv = () => {
    const container = top.document.createElement('div');
    container.className = 'more-options-container';
    container.id = 'moreOptionsContainer';
    container.appendChild(createSearchInput());
    return container;
};

const createSearchInput = () => {
    const input = top.document.createElement('input');
    input.id = 'inputSearch';
    input.placeholder = '🔎 Search...';
    return input;
}