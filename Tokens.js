class tokens {
    constructor(x, y, param, player){
        this.x = x;
        this.y = y;
        this.radio = 25;
        this.player = player;
        this.status = '';
        this.highlighted = false;
        this.image = new Image();
        this.getTokekImage(param)
    }

    getTokekImage(param) {
        if(param === 'p1')
            this.image.src = './images/ficha1.png';
        else if (param === 'p2')
            this.image.src = 'images/ficha2.png';
        else if (param === 'empty')
            this.image.src = './images/ficha-vacia.png';
    }

    setContext(context){
        this.context = context;
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
       
        this.context.drawImage(this.image, this.x - this.radio - 6, this.y - this.radio - 6);
        this.context.closePath();
        this.image.onload = () => {
        };
    }
}