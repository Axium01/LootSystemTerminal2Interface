// loot table that will be used
const loot = [];
const headerText = ["name", "value"];

// sends an error message to the page's validation message (accepts 1 string)
function errorSend(e) {
    console.log("[ERROR]: " + e);
    document.getElementById("validation").textContent = e;
}

// refreshes the displayed table and adds a new row to the table if the information set is valid
function addLoot() {
    // input info (existing elements)
    let lootName = document.getElementById("lootName").value;
    let lootValue = document.getElementById("lootValue").value;
    
    // validation
    if (lootName == "" || lootValue == "") {
        errorSend("Loot Name or Value is empty!");
        return;
    } else if (isNaN(Number(lootValue)) || Number(lootValue) <= 0) {
        errorSend("Loot Value must be a number that is above 0.");
        return;
    }

    // convert to an actual number
    lootValue = Number(lootValue);
    
    // creating table
    loot.push({name: lootName, value: lootValue});
    const container = document.getElementById("tableContainer");
    document.getElementById("tableContainer").innerHTML = "";
    const table = document.createElement("table");

    // table header
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