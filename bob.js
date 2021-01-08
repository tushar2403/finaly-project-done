class Bob{
 constructor(x,y,r){
     var option = {
        isStatic:false,
        'restitution':1,
      
        'density':0.8,
     }
     this.body=Bodies.circle(x,y,20,option);
     this.width=r;
     this.height=r;
     World.add(world,this.body);
    }
     display(){
         var pos=this.body.position;
         push();
         ellipseMode(CENTER);
         fill("red");
         ellipse(pos.x,pos.y,this.width,this.height);
         console.log('in bob class')
         pop();
     }
    }
