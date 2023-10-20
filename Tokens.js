class tokens {
    constructor(pX, pY, size){
        this.pX = pX
        this.pY = pY
        let radio = 25//600/size*2/10*2;

        this.status = '';
        this.highlighted = false;
        this.image = new Image();
    }

    setContext(context){
        this.context = context
    }

    draw(){
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radio, 0, Math.PI*2);
        this.context.fillStyle = '#ffffff';
        this.context.fill();
        if (this.highlighted === true) {
            this.context.strokeStyle = this.highlightedStyle;
            this.context.lineWidth = 5;
            this.context.stroke();
        }
        this.context.draw()
       
        // this.context.drawImage(this.image, this.x - this.radio - 6, this.y - this.radio - 6);
        this.context.closePath();
        // this.image.onload = () => {
        // };
    }
}