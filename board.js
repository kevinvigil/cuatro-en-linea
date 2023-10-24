class Boards {

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
        let diferenciaX = (600-(this.size+2)*25)/(this.size+3)+25;
        console.log(diferenciaX)
        let diferenciaY = (530-(this.size+1)*25)/(this.size+2)+25;
        console.log(diferenciaY)
        let Xinit = 250+diferenciaX - 12.5
        let pY = 70+diferenciaY - 12.5
        for (let r = 0; r < this.size+1; r++) {
            let pX = Xinit;
            this.slot[pY+"-row"] = [];
            for (let c = 0; c < this.size+2; c++) {
                let token = new tokens(pX, pY, this.size)
                token.setContext(this.context)
                this.slot[pY + '-row'][pX + '-col'] = token
                this.row.push(pX)
                pX += diferenciaX;
            }
            this.column.push(pY)
            pY += diferenciaY;
        }
    }

    drawBoard(){
        this.context.fillStyle = "#000000";
        this.context.fillRect(0,0,1100,600);
        this.context.fillStyle="#407F7F";
        this.context.fillRect(250,70,600,530);
        console.log(this.slot)
        for (let r = 0; r < this.row.length; r++) {
            for (let col = 0; col < this.column.length; col++) {
                let token = this.slot[this.column[col]+'-row'][this.row[r]+'-col'];
                token.draw();
            }
        }
    }
} 