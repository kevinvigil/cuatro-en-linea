class Games{

    constructor(canva, size){
        this.canva = canva;
        this.size = size;
        this.context = canva.getContext("2d");
        this.board = new Boards(this.context, this.size)
        this.board.drawBoard()
    }
}