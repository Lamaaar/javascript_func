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
 * @type {[]}
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

/**
 * 
 * @type {{headers:string[], formFields:FormFields[]}}
 */
const tableData = {
    headers: ["Nemzetiség", "Szerző", "Mű"],
    formFields: [
        {
            id: "nationality", 
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
            content: "Másik szerző:"
        },
        {
            id: "mu2", 
            content: "Mű:"
        },
    ]
}

document.body.appendChild(document.createElement("hr"));

const table = document.createElement("table");
document.body.appendChild(table)

generateHeader(table, tableData.headers);

const tbody = document.createElement("tbody");  
tbody.setAttribute("id", "tbody2")
table.appendChild(tbody);

renderTableBody(arr)

/**
 * @type {HTMLFormElement}
 */
const formElement = document.getElementById('htmlform');
formElement.addEventListener('submit', HTMLFormEventListener);

const newFormElement = document.createElement("form");
document.body.appendChild(newFormElement);

tableData.formFields.forEach(input => {
    createFormElement(newFormElement, input.id, input.content);
});

const button = document.createElement("button");
button.innerText = "Hozzáadás"
newFormElement.appendChild(button);