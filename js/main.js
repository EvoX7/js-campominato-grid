// ! Selecting grid output (parent)
const myContainer = document.getElementById("my_container");

// * Defining clickable button
const play = document.getElementById("play");

// ? Function to generate a square
function createSquare(number) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.textContent = number;
    
    // * Highlighting square on click
    newSquare.addEventListener("click", function () {
        newSquare.classList.toggle("highlighted");
        console.log(number);
    });

    return newSquare;
}

// ? Generating squares on button click
play.addEventListener("click", function () {
    // Clear the existing content in the container
    myContainer.innerHTML = "";

    // Generate and append new squares
    for (let i = 1; i <= 100; i++) {
        const genSquare = createSquare(i);
        myContainer.appendChild(genSquare);
    }
});
