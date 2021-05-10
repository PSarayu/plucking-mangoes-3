class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:5
        }
        this.pointB=pointB
        this.chain=con.create(options)
        World.add(world,this.chain)

      }

      attach(body){
        this.chain.bodyA=body;
    }

      fly(){
          this.chain.bodyA=null;
      }

   display(){
        if(this.chain.bodyA){
            var pos=this.chain.bodyA.position
            var posi=this.pointB
            line(pos.x, pos.y, posi.x, posi.y)
        }
      }
    }