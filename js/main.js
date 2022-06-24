// ! Selecting grid output (parent)
const myContainer = document.getElementById("my_container");

// * Defining clickable button
const play = document.getElementById("play");


// ! Creating a clickable PLAY button for user to generate a new grid

// ! Defining how many times i need to generate a square in the grid
// ? generate a square (1oo)
// ? assign proprieties they need 
// ? add numbers inside the squares
// ? add the new generated square to the parent (output)
// ? the squares will be clickable:
// * everytime there is a click, add a class if absent
// * remove a class if present



for (let i = 1; i < 100 + 1; i++) {
    const genSquare = fNewSquare();

    // * Adding numbers to squares 
    const ConsoleN = genSquare.innerHTML = i;


    // *Generating squares on button click 
    play.addEventListener("click", function () {
        myContainer.append(genSquare);
    })
    
    // *Highlighting square on button click 
    genSquare.addEventListener("click", function () {
        genSquare.classList.toggle("highlighted");

        console.log(ConsoleN);
    })

}

// *Generating element 
function fNewSquare() {
    const newBox = document.createElement("div");
    newBox.classList.add("square");
    return newBox;

}




