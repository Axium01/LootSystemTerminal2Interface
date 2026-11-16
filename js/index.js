// loot table that will be used
const loot = [];
const headerText = ["name", "value"];

// sends an error message to the page's validation message (accepts 1 string)
function errorSend(e) {
    console.log("[ERROR]: " + e);
    document.getElementById("validation").textContent = e;
}

// refreshes the displayed table and adds a new row to the table if the information set is valid
// also calculates and displays the total value
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
    container.innerHTML = ""; // this resets the container into a state where it has nothing in it
    const table = document.createElement("table");

    // table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = headerText; // yes i am doing this seperately so that it isn't hardcoded into the function
    
    // for each element (headerText) in headers...
    headers.forEach(headerText => {
        const th = document.createElement("th");
        // ...set the text of the <th> to the value of the current element.
        th.textContent = headerText.toUpperCase();
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // creating body
    const tbody = document.createElement("tbody");
    // for each object (rowData) in loot...
    loot.forEach(rowData => {
        const row = document.createElement("tr");
        // ...using headers to access the object's named index (ex. name)...
        headers.forEach(key => {
            const td = document.createElement("td");
            // ...set the text of the <td> to the value of the current object's named index equal to key.
            // (ex. if key = "name", then access the index called "name")
            td.textContent = rowData[key];
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // render table
    container.appendChild(table);

    // total value stuff below
    let totalValue = 0;
    loot.forEach(item => {
        totalValue += item.value;
    });

    // creating total value display
    const totalDisplay = document.createElement("p");
    const totalContainer = document.getElementById("totalContainer");
    totalContainer.innerHTML = "";

    // render total
    totalDisplay.textContent = "Total Loot Value: " + totalValue;
    totalContainer.appendChild(totalDisplay);
}

/* 
before anything is added to the array, it's empty. nothing actually changes with the
contents of the array before the new item is added, but lootValue is changed to a number
after validation so that the total value can be read later.
after the values are added to the end of the array (in the format of {name: lootName, value: lootValue}),
the container for the table is completely wiped clean so that it can be rerendered without duplicating the <table>.
for the actual table creation, the header row (thead) is created first, followed by the row data (tbody), 
and both are appended to the table before the table itself is appended to the container.
the header row is made using the headerText array, first creating a row for the headers with <tr> and then appending 
a <th> for each element in the array.
the data rows are made using the populated loot array. it's mostly the same process, with the row being appended 
to the table before the data cells are filled in. 
you can see more on how it works in the loops because i don't really know how to word it in this LOL.
after both thead and tbody have been appended to the table, the table itself is appended to the container, which makes it render.
the total value is simply calculated just by adding each loot objects value in the loot table together, and then that value gets 
used when we want to render the total value. like the table container, the total container is wiped so we don't duplicate
the <p> that would be shown.
*/