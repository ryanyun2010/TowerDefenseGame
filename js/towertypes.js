/**
 * Machine Gunner Tower Extends Tower - blue 1 damage 150 range 10 attack delay 7 bullet speed 20 lifespan
 * @type {class}
 * @param  {number} x the x coordinate of the tower
 * @param  {number} y the x coordinate of the tower
 * @property {Function} constructor constructor
 */
class MachineGunner extends Tower{
    constructor(x,y){
        super(x,y,1,150,10,7,"blue",20);
    }
}
/**
 * Sprayer Tower Extends Tower - grey 2 damage 100 range 100 attack delay 8 bullet speed 10 lifespan - Shoots all around it
 * @type {class}
 * @param  {number} x the x coordinate of the tower
 * @param  {number} y the x coordinate of the tower
 * @property {Function} constructor constructor
 * @property {Function} attemptToShoot attempts to shoot all around the tower
 */
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
/**
 * Sniper Tower Extends Tower - black 7 damage 1000 range 100 attack delay 100 bullet speed 100 lifespan
 * @type {class}
 * @param  {number} x the x coordinate of the tower
 * @param  {number} y the x coordinate of the tower
 * @property {Function} constructor constructor
 */
class Sniper extends Tower{
    constructor(x,y){
        super(x,y,7,1000,100,100,"black",100);
    }
}
/**
 * Dart Shooter Tower Extends Tower - yellow 2 damage 250 range 50 attack delay 7 bullet speed 100 lifespan
 * @type {class}
 * @param  {number} x the x coordinate of the tower
 * @param  {number} y the x coordinate of the tower
 * @property {Function} constructor constructor
 */
class DartShooter extends Tower{
    constructor(x,y){
        super(x,y,2,250,50,7,"yellow",100);
    }
}