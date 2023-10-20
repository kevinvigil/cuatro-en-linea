class Board {

    constructor (context, size){
        this.size = size;
        this.slot = [];
        this.column = [];
        this.row = [];

        this.context = context;
        this.initSlot()
        this.drawBoard()
    }

    initSlot(){
        let difenciaX = 600/(this.size+3);
        console.log(difenciaX)
        let diferenciaY = 480/(this.size+2);
        console.log(diferenciaY)
        let Xinit = 250+difenciaX;
        let pY = 70+diferenciaY;
        for (let r = 0; r < this.size+2; r++) {
            let pX = Xinit;
            this.slot[pY+"-row"] = [];
            for (let c = 0; c < this.size+1; c++) {
                let token = new tokens(pX, pY, this.size)
                token.setContext(this.context)
                this.slot[pY + '-row'][pX + '-col'] = token
                this.row.push(pX)
                pX += difenciaX;
            }
            this.column.push(pY)
            pY += diferenciaY;
        }
    }

    drawBoard(){
        this.context.fillStyle = "#000000";
        this.context.fillRect(0,0,1100,550);
        this.context.fillStyle="#407F7F";
        this.context.fillRect(250,70,600,480);
        console.log(this.slot)
        for (let r = 0; r < this.row.length; r++) {
            for (let col = 0; col < this.column.length; col++) {
                let token = this.slot[this.column[col]+'-row'][this.row[r]+'-col'];
                token.draw();
            }
        }
    }




} 