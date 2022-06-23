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
        

for (let i = 1; i < 100 + 1; i++){
    const genSquare = fNewSquare();

    play.addEventListener("click", function(){
        myContainer.append(genSquare);
})

}



function fNewSquare(){
    const newBox = document.createElement("div");
    newBox.classList.add("square");
    return newBox;

    

}




