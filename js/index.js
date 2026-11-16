// loot table that will be used
const loot = [];
const headerText = ["name", "value"];

function addLoot() {
    // input (existing elements)
    const lootName = document.getElementById("lootName").value;
    const lootValue = document.getElementById("lootValue").value;
    const validation = document.getElementById("")
    loot.push({name: lootName, value: lootValue});
    console.log(loot)
    const container = document.getElementById("tableContainer");
    document.getElementById("tableContainer").innerHTML = "";
    const table = document.createElement("table");

    // 1. Create Table Header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = headerText;

    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText.toUpperCase();
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // creating body
    const tbody = document.createElement("tbody");
    loot.forEach(rowData => {
        const row = document.createElement("tr");
        
        headers.forEach(key => {
            const td = document.createElement("td");
            td.textContent = rowData[key];
            row.appendChild(td);
            console.log(rowData[key]);
        });
        
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // append to DOM
    container.appendChild(table);
}