/// <reference path="GameObject.ts"/>

class Player extends GameObject {
    private confidence: number = 0;

    constructor(){
        super("Player", document.body);

        this.width = 50;
        this.height = 20;

        document.getElementsByTagName("ui")[0].innerHTML = "Confidence" + this.confidence;

        function keyboardinput(event : KeyboardEvent){
            if (event.keyCode == 37 || event.keyCode == 65 ){
                //move left
                this.xspeed = -5;
                // set animation to move left
                this.div.style.backgroundImage = "url('images/player/Player.gif')"
                
            }
            else {
                this.div.style.backgroundImage = "url('images/player/Player_Frame_2.png')"
            }
        
            if (event.keyCode == 39 || event.keyCode == 68 ){
                //move right
                this.xspeed = 5;
                // set animation to move right
                this.div.style.backgroundImage = "url('images/player/Player.gif')"
            }
            else {
                this.div.style.backgroundImage = "url('images/player/Player_Frame_2.png')"
            }
        
            if (event.keyCode == 38 || event.keyCode == 87 ){
                //move up
                this.yspeed = -5;
                //set animation to move up
                this.div.style.backgroundImage = "url('images/player/Player.gif')"
               }
            else {
                this.div.style.backgroundImage = "url('images/player/Player_Frame_2.png')"
            }
        
            if (event.keyCode == 40 || event.keyCode == 83 ){
                //move down
                this.yspeed = 5;
                //set animation to move down
                this.div.style.backgroundImage = "url('images/player/Player.gif')"
                this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) scaleY(-1)";
            }
            else {
                this.div.style.backgroundImage = "url('images/player/Player_Frame_2.png')"
            }
        }
        
        document.addEventListener("keydown", keyboardinput);
    }

public update(){
        this.x += this.xspeed;
        this.y += this.yspeed;
        super.update();
    }


}