const num = 4
const obj = {}

if (num > 5) {
    obj.name = "Valami történt";
} else {
    obj["name"] = "Valami nem történt";
}

console.log(obj)
console.log(obj["name"])

if (obj.age == undefined) {
    console.log("nincs érték undefined")
}

if (obj.age == null) {
    console.log("nincs érték null")
}

/**
 * @type {{nationality: string, author1: string, author1Title: string, author2?: string, author2Title?: string}[]}
 */
const arr = [
    {
        nationality: 'Orosz',
        author1: 'Gogol',
        author1Title: 'A köpönyeg',
        author2: 'Csehov',
        author2Title: 'A csinovnyik halála',
    },
    {
        nationality: 'Cseh',
        author1: 'Franz Kafka',
        author1Title: 'Az átváltozás'
    },
    {
        nationality: 'Magyar',
        author1: 'Örkény István',
        author1Title: 'Egyperces Novellák',
        author2: 'József Attila',
        author2Title: 'Klárisok',
    },
    {
        nationality: 'Svájc',
        author1: 'Fredrich Dürrenmatt',
        author1Title: 'A fizikusok',
    }
]

const theads = [
    "Nemzetiség",
    "Szerző",
    "Mű"
]

document.body.appendChild(document.createElement("hr"));

const table = document.createElement("table");
document.body.appendChild(table)

const thead = document.createElement("thead");
table.appendChild(thead)

const tr = document.createElement("tr");
thead.appendChild(tr);

theads.forEach(title => {
    const th = document.createElement("th");
    th.innerText = title;
    tr.appendChild(th);
});

const tbody = document.createElement("tbody");
table.appendChild(tbody);

arr.forEach(tr_data => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    const td_war = document.createElement("td");
    td_war.innerText = tr_data.nationality;
    td_war.addEventListener("click", function (e) {
        /**
         * @type {HTMLTableCellElement}
         */
        const target = e.target;
        target.classList.add('marked');
    });
    tr.appendChild(td_war);

    const td_team1 = document.createElement("td");
    td_team1.innerText = tr_data.author1;
    tr.appendChild(td_team1);

    const td_team1_size = document.createElement("td");
    td_team1_size.innerText = tr_data.author1Title;
    tr.appendChild(td_team1_size);

    if (tr_data.author2 && tr_data.author2Title) {
        td_war.rowSpan = 2;

        const tr_2 = document.createElement("tr");
        tbody.appendChild(tr_2);

        const td_team2 = document.createElement("td");
        td_team2.innerText = tr_data.author2;
        tr_2.appendChild(td_team2);
        
        const td_team2_size = document.createElement("td");
        td_team2_size.innerText = tr_data.author2Title;
        tr_2.appendChild(td_team2_size);
    }
});

/**
 * @type {HTMLFormElement}
 */
const formElement = document.getElementById('htmlform');
formElement.addEventListener('submit', function (e) {
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
    emptyObj.title1 = title1;

    /**
     * @type {string}
     */

    const author2 = author2Element.value;
    emptyObj.author2 = author2;

    /**
     * @type {string}
     */

    const title2 = title2Element.value;
    emptyObj.title2 = title2;

    const tbody = document.querySelector("#tbody");
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    const td_nationality = document.createElement("td");
    td_nationality.innerText = emptyObj.nationality;
    tr.appendChild(td_nationality);

    const td_author1 = document.createElement("td");
    td_author1.innerText = emptyObj.author1;
    tr.appendChild(td_author1);

    const td_title1 = document.createElement("td");
    td_title1.innerText = emptyObj.title1;
    tr.appendChild(td_title1);

    if (emptyObj.author2 && emptyObj.title2) {
        td_nationality.rowSpan = 2;

        const tr2 = document.createElement("tr");
        tbody.appendChild(tr2);

        const td_author2 = document.createElement("td");
        td_author2.innerText = emptyObj.author2;
        tr2.appendChild(td_author2);

        const td_title2 = document.createElement("td");
        td_title2.innerText = emptyObj.title2;
        tr2.appendChild(td_title2);
    }
});

function createFormElement(form, id, labelContent) {
    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = labelContent;
    form.appendChild(label);
    
    form.appendChild(document.createElement("br"));
    
    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.name = id;
    form.appendChild(input);

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
}

const newFormElement = document.createElement("form");
document.body.appendChild(newFormElement);

const inputs = [
    {
        id: "nemzetiseg",
        content: "Nemzetiség:"
    },
    {
        id: "szerzo1",
        content: "Szerző:"
    },
    {
        id: "mu1",
        content: "Mű:"
    },
    {
        id: "szerzo2",
        content: "Másik Szerző:"
    },
    {
        id: "mu2",
        content: "Mű:"
    }
]

inputs.forEach(input => {
    createFormElement(newFormElement, input.id, input.content);
});