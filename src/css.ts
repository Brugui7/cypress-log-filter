export const createStyle = () => {
    const reporterStyleEl = document.createElement('style');
    reporterStyleEl.setAttribute('id', 'logHandlerDivStyle');
    reporterStyleEl.innerHTML = `
        .hide-search-result {
            display: none!important;
        }
    
        .more-options-container {
            width: 100%;
            display: none;
            align-items: center;
            justify-content: center;
        }
        
        .cypress-log-filter-container {
            display:flex;
            align-items:center;
            justify-content:center;        
        }
        
        .btn {
          background-color: #272c33;
          color: #fff;
          border: none;
          cursor: pointer;
          fill: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
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
        
        #inputSearch {
          background-color: #2d2d2d;
          border: 1px solid #333;
          padding: 10px; 
          border-radius: 4px;
          outline: none;
        }
        
        #inputSearch:focus {
          border-color: #8a2be2;
          box-shadow: 0 0 8px #8a2be2;
        }
    `;
    return reporterStyleEl;
}
