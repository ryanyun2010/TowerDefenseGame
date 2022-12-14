/**
 * Projectile Class
 * @type {class}
 * @param  {number} x the x coordinate of the projectile
 * @param  {number} y the y coordinate of the projectile
 * @param  {object} target the target of the projectile expressed as an object with x and y properties
 * @param  {number} speed the speed of the projectile
 * @param  {number} damage the damage the projectile deals
 * @param  {number} lifespan the number of frames before the projectile is removed
 * @param  {number} theta the direction of the projectile
 * @property {number} index index of the projectile in the projectiles array
 * @property {Function} constructor constructor
 * @property {Function} draw draws the projectile
 * @property {Function} move moves the projectile based on theta
 * @property {Function} update calls move and draw
 */
class Projectile{
    constructor(x,y,target,speed,damage,lifespan,theta){
        this.x = x;
        this.y = y;
        this.target = target;
        this.speed = speed;
        this.damage = damage;
        this.index = 0;
        this.lifespan = lifespan || 1000000;
        if(theta != undefined){
            this.theta = theta
        }else{
            this.theta =  atan2(this.target.y - this.y, this.target.x - this.x);;
        }   
       
    }
    draw(){
        ellipseMode(CENTER);
        stroke("black");
        strokeWeight(2);
        fill("white");
        ellipse(this.x,this.y,20,20)
        this.lifespan--;
        if(this.lifespan <1){
            removeProjectile(this);
        }
    }
    move(){
        let xspeed = this.speed * cos(this.theta);
        let yspeed = this.speed * sin(this.theta);
        var effectivespeed = Math.sqrt(Math.pow(xspeed,2) + Math.pow(yspeed,2))
        this.xspeed *= this.speed/effectivespeed;
        this.yspeed *= this.speed/effectivespeed;
        this.x += xspeed;
        this.y += yspeed;
        if(checkEnemyHit(this).hit){
            hitEnemy(this,checkEnemyHit(this).enemy);
        }
    }
    update(){
        this.move();
        this.draw();
    }
}