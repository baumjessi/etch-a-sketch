let container = document.getElementById("container");
let column;
let columnNumber = 16;

for (let i = 0; i < columnNumber; i++) {
    column = document.createElement('div');
    column.className = "column";
    container.appendChild(column);
};

let allColumns = document.querySelectorAll(".column");
const columnArray = Array.from(allColumns);

columnArray.forEach(element => {
    for (let i = 0; i < columnNumber; i++) {
        let newCell = document.createElement('div');
        newCell.className = "cell";
        element.appendChild(newCell);
    }
}
);

let cells = document.getElementsByClassName("cell");
cellArray = Array.from(cells);
let isMouseDown;

cellArray.forEach((cell)=> {
    cell.addEventListener("mouseenter", event => {
        cell.addEventListener("mousedown", e =>  {     
            isMouseDown = 2;
            console.log("mouse down");
    });
    cell.addEventListener('mouseup', e => {
            isMouseDown = 1;
            console.log("mouse up");
    });
    switch(isMouseDown){
        case 1:
            break;
        case 2:
            cell.style.backgroundColor = "black";
            break;
        }
            })});
