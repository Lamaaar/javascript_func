console.log("asd");
/**
 * @type{ string }
 */
const szo = "euf";
console.log(szo);
/**
 * @type{ string[] }
 */
const arr = ["abc","def","ghi"];
console.log(arr[0]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (const a of arr) {
    console.log(a)
}

for (const key in arr) {
    console.log(`${key}:${arr[key]}`);
}

/**
 * @type{ {nev: string, age: int} }
 */
const a = {
    nev: `Áron`,
    age: 18
}
console.log(a)

/**
 * @type { {author: string, era: string, loves: string[]}[] }
 */

const tableData = [
    {
        author: "Balassi Bálint",
        era: "reformáció",
        loves: [
            "Losonczy Anna",
            "Dobó Krisztina"
        ]
    },
    {
        author: "Csokonai Vitéz Mihály",
        era: "felvilágosodás",
        loves: [
            "Vajda Juliána"
        ]
    },
    {
        author: "Petőfi Sándor",
        era: "magyar romantika",
        loves: [
            "Mednyánszky Berta",
            "Szendrey Júlia"
        ]
    },
    {
        author: "Ady Endre",
        era: "20. század",
        loves: [
            "Léda",
            "Csinszka"
        ]
    }
]

const headData = [
    "Szerző neve",
    "Korszak",
    "Szerelmek"
]

document.body.appendChild(document.createElement('hr'));

// HF

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const thead_tr = document.createElement('tr');
thead.appendChild(thead_tr);

for (const title of headData) {
    const cell = createCellElement("th", title, thead_tr);

    if (title == headData[2]) {
        cell.colSpan = 2;
    }
}

const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (const data of tableData) {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    createCellElement("td", data.author, tr);
    createCellElement("td", data.era, tr);
    
    if (data.loves.length > 1) {
        for (let i = 0; i < data.loves.length; i++) {
            createCellElement("td", data.loves[i], tr);
        }
    } else {
        const cell = createCellElement("td", data.loves[0], tr);
        cell.colSpan = 2;
    }
}

/**
 * 
 * @param {string} cellType - Meghatározza, hogy th/td typus lesz
 * @param {string} cellContent - Meghatározza a cella tartalmát
 * @param {HTMLTableRowElement} cellRow - Meghatározza, hogy melyik sorhoz fogjuk csatolni
 * @returns {HTMLTableCellElement}
 */

function createCellElement(cellType, cellContent, cellRow) {
    const cell = document.createElement(cellType)
    cell.innerText = cellContent;
    cellRow.appendChild(cell);

    return cell;
}