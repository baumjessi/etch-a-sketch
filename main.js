let container = document.getElementById("container");
let column;
let columnNumber = 16;

for (let i = 0; i < columnNumber; i++) {
    column = document.createElement('div');
    column.className = "column";
    container.appendChild(column);
};

let allColumns = document.querySelectorAll(".column");
let columnArray = Array.from(allColumns);

columnArray.forEach(column => {
    for (let i = 0; i < columnNumber; i++) {
        let newCell = document.createElement('div');
        newCell.className = "cell";
        column.appendChild(newCell);
    }
}
);

let cells = document.getElementsByClassName("cell");
cellArray = Array.from(cells);
let isMouseDown;

function pen() {
cellArray.forEach((cell)=> {
    cell.addEventListener("mousedown", e => {
    cell.style.backgroundColor = "black";
    });
});

cellArray.forEach((cell)=> {
    cell.addEventListener("mouseenter", e => {
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
        }; 

function eraser() {
    cellArray.forEach((cell)=> {
        cell.addEventListener("mousedown", e => {
        cell.style.backgroundColor = "white";
        });
    });
    
    cellArray.forEach((cell)=> {
        cell.addEventListener("mouseenter", e => {
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
                cell.style.backgroundColor = "white";
                break;
            }
                })});
            }; 


pen();

let gridBtn = document.getElementById("new-grid");

gridBtn.addEventListener("click", e=> {
    columnArray.forEach((column)=> {
        column.remove();
    });
    cellArray.forEach((cell)=> {
        cell.remove();
    });
    let newGridSize = window.prompt("Enter grid size between 1-100:");

    for (let i = 0; i < newGridSize; i++) {
        column = document.createElement('div');
        column.className = "column";
        container.appendChild(column);
    };

    allColumns = document.querySelectorAll(".column");
    columnArray = Array.from(allColumns);

    columnArray.forEach(column => {
    for (let i = 0; i < newGridSize; i++) {
        newCell = document.createElement('div');
        newCell.className = "cell";
        column.appendChild(newCell);
    }

    cells = document.getElementsByClassName("cell");
    cellArray = Array.from(cells);
    let isMouseDown;

    pen();
})});

const hexDigits = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let randomColor;

function getHexDigits(index) {
    return hexDigits[index]
}

function getRandomColor() {
    randomColor = "#"

    for (let index = 0; index < 6; index++){
        const randomDigit = Math.floor ( Math.random() * hexDigits.length ) 
        randomColor += getHexDigits(randomDigit);
    }
    return randomColor;
};


let penBtn = document.getElementById("pen");
penBtn.addEventListener("click", pen);

let eraserBtn = document.getElementById("eraser");
eraserBtn.addEventListener("click", eraser);

let rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener("click", e => {
    cellArray.forEach((cell)=> {
        cell.addEventListener("mousedown", e => {
        cell.style.backgroundColor = getRandomColor();
        });
    });
    
    cellArray.forEach((cell)=> {
        cell.addEventListener("mouseenter", e => {
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
                cell.style.backgroundColor = getRandomColor();
                break;
            }})})});