/**
 * Tier 1 Enemy Extends Enemy - red 2 speed 1 health and worth 2 coins
 * @type {class}
 * @param  {object} path the path the enemy will follow
 * @property {Function} constructor constructor
 */
class Tier1Enemy extends Enemy{
    constructor(path){
        super(path,"red",2,1,2);
    }
}
/**
 * Tier 2 Tank Enemy Extends Enemy - blue 1 speed 3 health and worth 4 coins
 * @type {class}
 * @param  {object} path the path the enemy will follow
 * @property {Function} constructor constructor
 */
class Tier2TankEnemy extends Enemy{
    constructor(path){
        super(path,"blue",1,3,4);
    }
}
/**
 * Tier 2 Base Enemy Extends Enemy - green 2.5 speed 2 health and worth 3 coins
 * @type {class}
 * @param  {object} path the path the enemy will follow
 * @property {Function} constructor constructor
 */
class Tier2BaseEnemy extends Enemy{
    constructor(path){
        super(path,"Green",2.5,2,3);
    }
}
/**
 * Tier 2 Speed Enemy Extends Enemy - green 3.5 speed 1 health and worth 4 coins
 * @type {class}
 * @param  {object} path the path the enemy will follow
 * @property {Function} constructor constructor
 */
class Tier2SpeedEnemy extends Enemy{
    constructor(path){
        super(path,"yellow",3.5,1,4);
    }
}