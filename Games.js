class Games{

    constructor(canva, size){
        this.canva = canva;
        this.size = size;
        this.context = canva.getContext("2d");
        this.board = new Boards(this.context, this.size);
        this.player1 = new Players(this.context, "MESSI", 1);
        this.player2 = new Players(this.context, "RONALDO", 1);
        this.tokens = [];
        this.drawTokens();

    }

    drawTokens(){
        let InitialPosXJ1 = 10
        let InitialPosXJ2 = 860
        this.context.fillStyle = "#111111";
        this.context.fillRect(10,10,230,530);
        this.drawPlayerToken(InitialPosXJ1, 'p1', this.player1)
        this.drawPlayerToken(InitialPosXJ2, 'p2', this.player2)
    }

    drawPlayerToken(x, img, jugador){
        let diferenciaX = 56;
        let diferenciaY = (600/12);
        let fxInit = x+diferenciaX-25;
        let fy = 600-25;
        let contador = 0;
        let fila = 0;
        let column;
        while (contador<((this.size+2)*(this.size+1)/2) && fila<12) {
            let fx = fxInit;
            column = 0;
            while (contador<(((this.size+2)*(this.size+1))/2) && column<4) {
                let token = new tokens(fx, fy, img, jugador);
                token.setContext(this.context)
                this.tokens.push(token)
                fx += diferenciaX;
                column++;
                contador++;
                console.log("hola")
            }
            fy -= diferenciaY;
            fila++
        }
    }

    prepareGame(){        
        this.board.drawBoard();
        this.setTokens();
        // this.checkCurrentTurn();
    }

    setTokens() {
        for (let i = 0; i < this.tokens.length; i++){
            this.tokens[i].draw();
        }
    }
}