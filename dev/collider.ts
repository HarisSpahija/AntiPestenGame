enum COLLIDER {
    RECTANGLE,
    CIRCLE
}

interface iCollider {
    colliderType: COLLIDER;
    position: cVector;
}

class cVector {
    public x: number = 0;
    public y: number = 0;

    constructor(x: number = 0, y:number = 0){
        this.x = x;
        this.y = y;
    }
}

class cRectangleCollider implements iCollider {
    public position: cVector = new cVector();
    public dimension: cVector = new cVector(1,1);
    public hitTest(obj: iCollider): boolean{
        if (obj.colliderType == COLLIDER.RECTANGLE){
            return Collision.RectangleRectangle(this, <cRectangleCollider>obj);
        }
        else {
            return false;
        }
    }
    public colliderType: COLLIDER = COLLIDER.RECTANGLE;
}

class Collision {
    public static RectangleRectangle(a: cRectangleCollider, b: cRectangleCollider): boolean {
        var xoverlap: boolean = false;
        var yoverlap: boolean = false;
        if (a.position.x <= b.position.x) {
            if (a.position.x + a.dimension.x >= b.position.x || b.position.x + b.dimension.x >= a.position.x) {
                xoverlap = true;
            }
        }

        if (a.position.y <= b.position.y) {
            if (a.position.y + a.dimension.y >= b.position.y || b.position.y + b.dimension.y >= a.position.y) {
                yoverlap = true;
            }
        }

        if(xoverlap == true && yoverlap == true){
            return true;
        }
        else{
            return false;
        }

    }
}
