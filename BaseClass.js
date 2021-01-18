/*class BaseClass{
    constructor(x,y,w,h,angle){
        var body_Options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,w,h,body_Options)
        this.image = loadImage("sprites/base.png")
        this.width = w;
        this.height = h;
        World .add(world,this.body)
    }
    display(){
        var angle = this.body.angle
        push ()
        translate( this.body.position.x, this.body.position.y)
        rotate (angle)
        imageMode(CENTER)
        image( this.image, 0,0,this.width,this.height)
        pop ()
    }
}*/

class BaseClass {
    constructor(x,y,width,height,angle){
  
      var base_options ={
        restitution:0.2,
        friction:3,
        density:1
      }
      this.body = Bodies.rectangle(x,y,width,height,base_options)
      this.bodywidth = width
      this.bodyheight = height
      this.image = loadImage("sprites/base.png")
      World.add(myworld,this.body)
  
  
    }
  
    display(){
      var pos = this.body.position
      var angle = this.body.angle
      push() 
      translate(pos.x,pos.y)
      rotate(angle)
      imageMode(CENTER)
      image (this.image,0,0,this.bodywidth,this.bodyheight)
      //rectMode(CENTER)
      //rect(0,0,this.bodywidth,this.bodyheight)
      pop()
    }
  };
