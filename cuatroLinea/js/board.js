class Boards {

    constructor (context, size){
        this.size = size;
        this.slot = [];
        this.column = [];
        this.row = [];
        this.topY = 70
        this.context = context;
        this.initSlot()
    }

    initSlot(){
        let diferenciaX = (600-(this.size+2)*25)/(this.size+3)+25;
        let diferenciaY = (530-(this.size+1)*25)/(this.size+2)+25;
        let Xinit = 250+diferenciaX - 12.5
        let pY = 70+diferenciaY - 12.5
        for (let r = 0; r < this.size+1; r++) {
            let pX = Xinit;
            this.slot[pY+"-row"] = [];
            for (let c = 0; c < this.size+2; c++) {
                let token = new tokens(pX, pY, this.size, 0)
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
        for (let r = 0; r < this.row.length; r++) {
            for (let col = 0; col < this.column.length; col++) {
                let token = this.slot[this.column[col]+'-row'][this.row[r]+'-col'];
                token.draw();
            }
        }
    }

    couldInsertToken(x, y, currentToken) {
        if (y < this.topY && x > 250 && x < 850)
            return this.searchSlot(x, currentToken);
        return false;
    }

    searchSlot(x, currentToken) {
        for(let i = 0; i < this.row.length; i++) {
            if (this.row[i] > x - 25 && this.row[i] < x + 25){
                return this.insertToken(this.row[i], currentToken);
            }                    
        };
        return false;
    }

    insertToken(x, currentToken) {
        let posTmpY = -1;
        let couldInsert = false;        

        for (let y = 0; y < this.column.length; y++) {
            let tmpy = this.column[y];

            if (this.slot[tmpy+'-row'][x+'-col'].getPlayer() === 0){
                posTmpY = tmpy;
                couldInsert = true;
            }
        }
        if (posTmpY !== -1) {
            currentToken.setX(x);
            currentToken.setY(posTmpY);
            currentToken.setStatus('inactive');
            this.slot[posTmpY+'-row'][x+'-col'] = currentToken;
        }        
        return couldInsert;  
    }
} 