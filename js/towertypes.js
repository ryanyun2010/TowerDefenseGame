class MachineGunner extends Tower{
    constructor(x,y){
        super(x,y,1,150,10,7,"blue",20);
    }
}
class Sprayer extends Tower{
    constructor(x,y){
        super(x,y,2,100,100,8,"grey",10);
    }
    attemptToShoot(){
     if(closestEnemyInRange(this,this.range)[0] != 0){
        for(var i = -5; i < 7; i++){
            projectiles.push(new Projectile(this.x,this.y,undefined,this.projectilespeed,this.damage,this.projectilelifespan,Math.PI * i/6));
        }
        this.canShoot = false;
        this.delayLeft = this.attackdelay;
     }
    }
}
class Sniper extends Tower{
    constructor(x,y){
        super(x,y,7,1000,100,100,"black",100);
    }
}
class DartShooter extends Tower{
    constructor(x,y){
        super(x,y,2,250,50,7,"yellow",100);
    }
}