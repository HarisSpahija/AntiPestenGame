class GameObject {
    public div: HTMLElement;
    public x: number;
    public y: number;
    public xspeed:number;
    public yspeed: number;
    public width: number;
    public height: number;
    public direction: number = 1;

    constructor(tag:string, parent:HTMLElement){
        this.div = document.createElement(tag);
        parent.appendChild(this.div);
    }

public update():void {
        this.direction = (this.xspeed < 0) ? 1 : -1;
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) scale("+this.direction+",1)";
    }

}