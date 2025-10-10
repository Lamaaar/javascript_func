/**
 * @type {{war: string, team1: string, team1Size: string, team2?: string, team2Size?: string}[]}
 */
const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]

const theads = [
    "Harc megnevezése",
    "Szembenálló felek",
    "Haderő"
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
    td_war.innerText = tr_data.war;
    tr.appendChild(td_war);

    const td_team1 = document.createElement("td");
    td_team1.innerText = tr_data.team1;
    tr.appendChild(td_team1);

    const td_team1_size = document.createElement("td");
    td_team1_size.innerText = tr_data.team1Size;
    tr.appendChild(td_team1_size);

    if (tr_data.team2 && tr_data.team2Size) {
        td_war.rowSpan = 2;

        const tr_2 = document.createElement("tr");
        tbody.appendChild(tr_2);

        const td_team2 = document.createElement("td");
        td_team2.innerText = tr_data.team2;
        tr_2.appendChild(td_team2);
        
        const td_team2_size = document.createElement("td");
        td_team2_size.innerText = tr_data.team2Size;
        tr_2.appendChild(td_team2_size);
    }
});