document.addEventListener("DOMContentLoaded", function(event) {

    let startGame = document.querySelector("#start");
    let canva = document.querySelector("#board");
    let size = 7 //document.querySelector("#size");
    let game ;
    

    startGame.addEventListener("click", () => {
        game = new Games(canva, size);

    })
})