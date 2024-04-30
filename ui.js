function gridGeneration() {
    let gridSize = parseInt(prompt("Enter # of squares per side for your new grid.", 0));

    if (gridSize >= 1 && gridSize <= 100) {
        // Clear existing grid items
        while(gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }

        // Generate new grid items
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

let userInputButton = document.createElement("button");
userInputButton.id = "userInputButton";

userInputButton.textContent = "Generate Grid";
userInputButton.style.cssText = `
    width: 100px;
    height: 40px;
    border-radius: 10px;
    margin: 20px;
`;

const buttonContainer = document.getElementById("button-container");
buttonContainer.appendChild(userInputButton);


document.getElementById("userInputButton").addEventListener("click", function() {
    gridGeneration();
});

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