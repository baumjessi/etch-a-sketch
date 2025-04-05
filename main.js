let container = document.getElementById("container");
let column;
let cell;
let columnNumber = 16;

for (let i = 0; i < columnNumber; i++) {
    column = document.createElement('div');
    column.className = "column";
    container.appendChild(column);
};

let allColumns = document.querySelectorAll(".column");
const columnArray = Array.from(allColumns);
console.log(columnArray);

columnArray.forEach(element => {
    for (let i = 0; i < columnNumber; i++) {
        cell = document.createElement('div');
        cell.className = "cell";
        element.appendChild(cell);
    }
}
);