document.addEventListener("DOMContentLoaded", function(event) {

    let startGame = document.querySelector("#start");
    let canva = document.querySelector("#board");
    let size = 4 //document.querySelector("#size");
    let game =  new Games(canva);
    

    startGame.addEventListener("click", () => {
        game = new Games(canva, size);
        game.prepareGame();
    })

    canva.addEventListener('mousedown', (e) => {
        let x = e.layerX - e.currentTarget.offsetLeft;
        let y = e.layerY - e.currentTarget.offsetTop;
        game.isClickedToken(x, y);
    })

    // const onMouseDown = e => {
    //     let x = e.layerX - e.currentTarget.offsetLeft;
    //     let y = e.layerY - e.currentTarget.offsetTop;            
    //     game.isClickedToken(x, y);
    // }

    canva.addEventListener('mousemove', (e) => {
        let x = e.layerX - e.currentTarget.offsetLeft;
        let y = e.layerY - e.currentTarget.offsetTop;   
        if (game.haveClickedToken())
            game.moveToken(x, y);
    })

    // const onMouseMove = e => {
    //     let x = e.layerX - e.currentTarget.offsetLeft;
    //     let y = e.layerY - e.currentTarget.offsetTop;   
    //     if (game.haveClickedToken())
    //         game.moveToken(x, y);
    // }

    canva.addEventListener('mouseup', (e) => {
        let x = e.layerX - e.currentTarget.offsetLeft;
        let y = e.layerY - e.currentTarget.offsetTop;
        if (game.haveClickedToken()){
            game.insertToken(x,y);    
        }
    })
    

    // const onMouseUp = e => {
    //     let x = e.layerX - e.currentTarget.offsetLeft;
    //     let y = e.layerY - e.currentTarget.offsetTop;
    //     if (game.haveClickedToken()){
    //         game.insertToken(x,y);    
    //     }
    // }


})