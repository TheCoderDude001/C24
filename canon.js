class Canon {

    constructor(x,y,x1,y1){

        this.body = Bodies.rectangle(x,y,40,50);
        this.body2 = Bodies.rectangle(x1+10,y1,40,20);
        this.width1 = 50
        this.width2 = 50
        this.height1 = 70
        this.height2 = 20

        World.add(world, this.body)
        World.add(world, this.body2)

    }

    display(){


        var pos =this.body.position;
        var pos2 =this.body2.position;
        rect(pos.x,pos.y, this.width1, this.height1)
        rect(pos2.x,pos2.y, this.width2, this.height2)

      var angle = mouse.angle
      translate(pos2.x, pos2.y);
      rotate(angle);
      rect(pos2.x,pos2.y, this.width2, this.height2)
    

    }
}