let container = document.getElementById("container");
let column;
let columnNumber = 100;

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
        let newCell = document.createElement('div');
        newCell.className = "cell";
        element.appendChild(newCell);
    }
}
);

let cells = document.getElementsByClassName("cell");
console.log(cells);

cellArray = Array.from(cells);

let isMouseDown = false;

document.addEventListener("mousedown", event => {
    isMouseDown = true;
    console.log('mouse is down');
});

cellArray.forEach((cell)=> {
    cell.addEventListener("", event => {
        event.target.style.backgroundColor = "black";
    })
});
