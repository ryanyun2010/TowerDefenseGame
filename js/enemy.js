/**
 * Enemy Class
 * @type {class}
 * @param  {object} path the path object which the enemy will follow
 * @param  {string} color the color of the enemy
 * @param  {number} speed the speed at which the enemy will move
 * @param  {number} health the health of the enemy
 * @param  {number} value the coins gained from killing the enemy
 * @property {number} x the x position of the enemy
 * @property {number} y the y position of the enemy
 * @property {object} target the target of the enemy expressed as an object with properties x and y
 * @property {number} targetnum the number of targets already achieved
 * @property {number} index the index of the enemy in the enemies array
 * @property {number} id a unique identifier for the enemy
 * @property {Function} constructor constructor 
 * @property {Function} draw draws the enemy on the screen
 * @property {Function} move moves the enemy towards its target
 * @property {Function} checkHealth checks if the enemy is dead
 * @property {Function} update runs move and draw
 */
class Enemy{
    constructor(path,color,speed,health,value){
        this.path = path;
        this.color = color;
        this.speed = speed;
        this.health = health;
        this.x = this.path.start.x;
        this.y = this.path.start.y;
        this.target = this.path.start;
        this.targetnum = 0;
        this.index = 0; 
        this.id = undefined;
        this.value = value;
    }
    draw(){
        rectMode(CENTER);
        stroke("black");
        strokeWeight(4);
        fill(this.color);
        rect(this.x,this.y,40,40)
    }
    move(){
        if(Math.abs(this.x - this.target.x) < 20 && Math.abs(this.y - this.target.y) < 20){
            this.targetnum++;
            if(this.targetnum == this.path.nodes.length){
                enemyReachedEnd(this);
                return;
            }
            this.target = this.path.nodes[this.targetnum];
        }
        let theta = atan2(this.target.y - this.y, this.target.x - this.x);
        let xspeed = this.speed * cos(theta);
        let yspeed = this.speed * sin(theta);
        this.x += xspeed;
        this.y += yspeed;
    }
    checkHealth(){
        if(this.health < 1){
            enemyDead(this);
        }
    }
    update(){
        this.move();
        this.draw();
    }
}