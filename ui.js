let gridSize = parseInt(prompt("Enter # of squares per side for your new grid.", 16))

function gridGeneration() {
    if (gridSize >= 1 && gridSize <= 100) {
        for (let i = 1; i <= (gridSize * gridSize); i++) {
            const div = document.createElement("div");
            div.classList.add("grid-item");
            div.style.width = gridSize + "px";
            div.style.height = gridSize + "px";
            gridContainer.appendChild(div);
        };
    };
};


const gridContainer = document.getElementById("grid-container");

gridContainer.addEventListener("mousemove", function(event) {
    if (event.target.classList.contains("grid-item")) {
        event.target.style.backgroundColor = "black";
    }
});

gridGeneration();

// function createGrid() {
//     for (let i = 1; i <= 256; i++) {
//         const div = document.createElement("div");
//         div.classList.add("grid-item");
//         gridContainer.appendChild(div);
//     };
// };

// createGrid();

// ** Concise but not specific, overwrites existing styles **
// 
// gridContainer.addEventListener('mousemove', (e) => {
//     e.target.setAttribute("style", "background-color: black")
// });  