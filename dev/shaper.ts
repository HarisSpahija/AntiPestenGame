interface ishape {
    draw() : void;
    x: number;
    y: number;
    color: string;
    lineWidth: number;
}
class cRectangle implements ishape {
    public x: number = 0;
    public y: number = 0;
    public velocityX: number = 0;
    public velocityY: number = 0;
    public lineWidth: number = 5;
    public width: number = 0;
    public height: number = 0;
    public color: string = "blue";
    constructor(x: number, y: number, width: number, height: number, color: string = "blue", line_width: number = 2)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.lineWidth = line_width;
    }
    public draw = () : void =>{
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x < -this.width * 2){
            this.x = 1280 + this.width *2;
        }
        else if (this.x > 1280 + this.width * 2){
            this.x = -2 * this.width;
        }
        if (this.y < -this.height * 2){
            this.y = 720 + this.height * 2;
        }
        else if (this.y > 720 + this.height * 2){
            this.y = -2 * this.height;
        }

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.restore();
    }
}
class cCircle implements ishape {
    public x: number = 0;
    public y: number = 0;
    public radius: number = 10;
    public lineWidth: number = 2;
    public color: string = "red";
    constructor (x: number, y: number, radius: number, color: string = "red", line_width: number = 2)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = line_width;
    }
    public draw = () : void => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.restore();
    }
}

var shape_array: Array<ishape> = new Array<ishape>();

    shape_array.push(bully1);
    shape_array.push(bully2);
    shape_array.push(bully3);
