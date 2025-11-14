/**
 * @typedef {{nationality: string, author1: string, author1Title: string, author2?: string, author2Title?: string}} CountryWriters
 */

/**
 * 
 * @param {object} data 
 */

function renderTableBody(data) {
    const tbody = document.querySelector("#tbody2");
    tbody.innerHTML = "";
    
    for (const item of data) {
        renderTableRow(tbody, item);
    }
}

/**
 * 
 * @param {HTMLFormElement} form 
 * @param {string} id 
 * @param {string} labelContent 
 */

function createFormElement(form, id, labelContent) {
    const div = document.createElement("div");
    form.appendChild(div);

    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = labelContent;
    div.appendChild(label);
    
    div.appendChild(document.createElement("br"));
    
    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.name = id;
    div.appendChild(input);

    const span = document.createElement("span");
    div.appendChild(span);

    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
}

/**
 * 
 * @param {HTMLTableSectionElement} tableBody
 * @param {CountryWriters} countryWriters
 */

function renderTableRow(tableBody, countryWriters) {
    const tr = document.createElement("tr");
    tableBody.appendChild(tr);

    const tdNationality = createCell("td", countryWriters.nationality, tr);
    tdNationality.addEventListener("click", function (e) {
        /**
         * @type {HTMLTableCellElement}
         */
        const target = e.target;
        target.classList.add('marked');
    });

    const tdAuthor1 = createCell("td", countryWriters.author1, tr);
    const tdAuthorTitle1 = createCell("td", countryWriters.author1Title, tr);

    if (countryWriters.author2 && countryWriters.author2Title) {
        tdNationality.rowSpan = 2;

        const tr2 = document.createElement("tr");
        tableBody.appendChild(tr2);

        const tdAuthor2 = createCell("td", countryWriters.author2, tr2);
        const tdAuthor2Title = createCell("td", countryWriters.author2Title, tr2);
    }
}

/**
 * 
 * @param {string} cellType 
 * @param {string} cellContent 
 * @param {HTMLTableRowElement} parentRow 
 * @returns {HTMLTableCellElement}
 */

function createCell(cellType, cellContent, parentRow) {
    const cellElement = document.createElement(cellType);
    cellElement.innerText = cellContent;
    parentRow.appendChild(cellElement);

    return cellElement;
}

/**
 * 
 * @param {HTMLTableElement} tableElement 
 * @param {Object} headerList 
 */

function generateHeader(tableElement, headerList) {
    const thead = document.createElement("thead");
    tableElement.appendChild(thead);

    const tr = document.createElement("tr");
    thead.appendChild(tr);

    for (const title of headerList) {
        createCell("th", title, tr);
    }
}

/**
 * 
 * @param {HTMLFormElement} e 
 */

function HTMLFormEventListener(e) {
    e.preventDefault();

    const target = e.target;

    /**
     * @type {HTMLInputElement}
     */
    const nationalityElement = target.querySelector('#nemzetiseg');

    /**
     * @type {HTMLInputElement}
     */
    const author1Element = target.querySelector('#szerzo1');
    
    /**
     * @type {HTMLInputElement}
     */
    const title1Element = target.querySelector('#mu1');
    
    /**
     * @type {HTMLInputElement}
     */
    const author2Element = target.querySelector('#szerzo2');
    
    /**
     * @type {HTMLInputElement}
     */
    const title2Element = target.querySelector('#mu2');

    /**
     * @type {{nationality: string, author1: string, author1Title: string, author2?: string, author2Title?: string}}
     */
    const emptyObj = {};

    /**
     * @type {string}
     */

    const nationality = nationalityElement.value;
    emptyObj.nationality = nationality;

    /**
     * @type {string}
     */

    const author1 = author1Element.value;
    emptyObj.author1 = author1;

    /**
     * @type {string}
     */

    const title1 = title1Element.value;
    emptyObj.author1Title = title1;

    /**
     * @type {string}
     */

    const author2 = author2Element.value;
    emptyObj.author2 = author2;

    /**
     * @type {string}
     */

    const title2 = title2Element.value;
    emptyObj.author2Title = title2;

    const tbody = document.querySelector("#tbody2");
    
    renderTableRow(tbody, emptyObj);
}

function validateFields(inputField1, inputField2, inputField3) {
    // todo
}