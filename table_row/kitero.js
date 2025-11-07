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