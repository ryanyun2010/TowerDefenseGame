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