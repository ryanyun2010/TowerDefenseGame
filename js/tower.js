class Tower{
    constructor(x,y,damage,range,attackdelay,projectilespeed,color,projectilelifespan){
        this.x = x;
        this.y = y;
        this.damage = damage;
        this.range = range;
        this.attackdelay = attackdelay;
        this.projectilespeed = projectilespeed;
        this.projectilelifespan = projectilelifespan;
        this.color = color;
        this.index = 0;
        this.canShoot = true;
        this.delayLeft = this.attackdelay;
    }

    draw(){
        ellipseMode(CENTER);
        noStroke();
        fill(255,255,255,50);
        ellipse(this.x,this.y,this.range * 2,this.range * 2);
        stroke("black");
        strokeWeight(5);
        fill(this.color);
        ellipse(this.x,this.y,50,50);
    }
    attemptToShoot(){
     if(closestEnemyInRange(this,this.range)[0] != 0){
        projectiles.push(new Projectile(this.x,this.y,closestEnemyInRange(this,this.range)[0],this.projectilespeed,this.damage,this.projectilelifespan));
        this.canShoot = false;
        this.delayLeft = this.attackdelay;
     }   
    }
    update(){
        if(this.delayLeft > 0){
            this.delayLeft --;
        }
        if(this.delayLeft < 1){
            this.canShoot = true;
        }
        if(this.canShoot){
        this.attemptToShoot();
        }
        this.draw();
    }
}