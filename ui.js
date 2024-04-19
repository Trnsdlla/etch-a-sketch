
const gridContainer = document.getElementById("grid-container");

function createGrid() {
    for (let i = 1; i <= 256; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        gridContainer.appendChild(div);
    };
};

createGrid();

gridContainer.addEventListener("mousemove", function(event) {
    if (event.target.classList.contains("grid-item")) {
        event.target.style.backgroundColor = "black";
    }
});

// ** Concise but not specific, overwrites existing styles **
// 
// gridContainer.addEventListener('mousemove', (e) => {
//     e.target.setAttribute("style", "background-color: black")
// });  