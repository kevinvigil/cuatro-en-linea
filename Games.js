class Games{

    constructor(canva, size){
        this.canva = canva;
        this.size = size;
        this.context = canva.getContext("2d");
        this.board = new Boards(this.context, this.size);
        this.player1 = new Player(this.context, "MESSI", 1);
        this.player2 = new Player(this.context, "RONALDO", 1);
        this.drawTokens();
    }

    drawTokens(){
        // let InitialPosXJ1 = 10
        // let InitialPosXJ2 = 860
        this.context.fillStyle = "#111111";
        this.context.fillRect(0,0,200,550);
    }

    drawPlayerToken(x, y, img, jugador){

    }
}