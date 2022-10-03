/**
 * Called when an enemy reaches the end
 * removed the health of the enemy from the player health
 * deletes the enemy
 * @type  {function}
 * @param  {object} enemy the enemy that reached the end
 */
function enemyReachedEnd(enemy){
    health -= enemy.health;
    enemies.splice(enemy.index,1);
}
/**
 * Sets the indexes of all elements of the array
 * @param  {array} array the array to set the indexes of
 */
function setIndexes(array){
    for(var i = 0; i < array.length; i ++){
        array[i].index = i;
    }
}
/**
 * Runs update on all elements of the array
 * @param  {array} array the array to update
 */
function updateAllInArray(array){
    for(var item of array){
        item.update();
    }
}
/**
 * Called when a projectile hits an enemy
 * Removes the projectile's damage from the enemy's health
 * Removes the projectile
 * Checks if the enemy is dead
 * @param  {object} projectile the projectile which hit the enemy
 * @param  {object} enemy the enemy which the projectile hit
 */
function hitEnemy(projectile,enemy){
    enemy.health -= projectile.damage;
    enemy.checkHealth();
    projectiles.splice(projectile.index,1); 
}
/**
 * Called when an enemy dies
 * Adds the enemy's value to the player's coins
 * Removes the enemy
 * @param  {object} enemy the enemy which died
 */
function enemyDead(enemy){
    coins+=enemy.value;
    removeEnemyWithId(enemy.id); 
    return;
}
/**
 * Finds the enemies in range of a tower
 * @param  {object} tower the tower which you want to find enemies in range of
 * @param  {object} range the range of the tower
 * @returns {array} An array of arrays. Each element contains the enemy and the distance from the tower to the enemy
 */
function enemiesInRange(tower,range){
    var enemiesir = [];
    for(var enemy of enemies){
        if(enemyInRange(tower,range,enemy)){
            enemiesir.push([enemy,distance(tower,enemy)])
        }
    }
    return enemiesir;
}
/**
 * Finds the closest enemy in range of the tower
 * @param  {object} tower the tower you want to find the closest enemy to
 * @param  {object} range the range of the tower
 * @returns {array} The closest enemy in range of the tower and the distance to the enemy from the tower
 */
function closestEnemyInRange(tower,range){
    var enemies = enemiesInRange(tower,range);
    var closest = [0,10000000]
    for(var enemy of enemies){
        if(enemy[1] < closest[1]){
            closest = enemy;
        }
    }
    return closest;
}
/**
 * Finds the distance between 2 points
 * @param  {array} point1 x and y of point 1
 * @param  {array} point2 x and y of point 2
 * @returns {number} distance between point 1 and point 2
 */
function distance(point1,point2){
    return Math.sqrt(Math.pow(Math.abs(point1.x - point2.x),2) + Math.pow(Math.abs(point1.y - point2.y),2));
}
/**
 * Checks if an enemy is in range of a tower
 * @param  {object} tower the tower which the enemy needs to be in range of
 * @param  {number} range the range of the tower
 * @param  {object} enemy the enemy to check if in range of the tower
 * @returns {boolean} true if the enemy is in range of the tower
 */
function enemyInRange(tower,range,enemy){
    return (distance(tower,enemy) <= range) ? true : false;
}
/**
 * Runs both updateAllInArray and setIndexes on an array
 * @param  {array} array array to run updateAllInArray and setIndexes on
 */
function updateAndIndexArray(array){
    updateAllInArray(array);
    setIndexes(array);
}
/**
 * Called when a wave has finished
 * Starts the next wave
 * @param  {object} wavedone the wave which has been finished
 */
function waveOver(wavedone){
    if((wavedone.index + 1) != waves.length){
        wave = waves[wavedone.index + 1];
    }
}
/**
 * Creates a tower at a x and y position
 * @param  {number} x the x to create the tower at
 * @param  {number} y the y to create the tower at
 * @param  {string} type the type of tower to create
 */
function createTower(x,y,type){
    switch(type){
        case 'Machine Gunner':
            towers.push(new MachineGunner(x,y));
            break;
        case 'Dart Shooter':
            towers.push(new DartShooter(x,y));
            break;
        case 'Sprayer':
            towers.push(new Sprayer(x,y));
            break;
        case 'Sniper':
            towers.push(new Sniper(x,y));
            break;
    }
}
/**
 * Finds the range of a tower type
 * @param  {string} type name of the tower type
 * @returns {number} range of the tower
 */
function findRange(type){
    switch(type){
        case 'Machine Gunner':
            return new MachineGunner(0,0).range;
            break;
        case 'Sniper':
            return new Sniper(0,0).range;
            break;
        case 'Sprayer':
            return new Sprayer(0,0).range;
            break;
        case 'Dart Shooter':
            return new DartShooter(0,0).range;
            break;
    }
}
/**
 * Removes the enemy with a certain ID
 * @param  {number} id ID of the enemy to remove
 */
function removeEnemyWithId(id){
    for(var i = 0; i < enemies.length; i ++){
        if(enemies[i].id == id){
            enemies.splice(i,1);
        }
    }
}
/**
 * Checks if a projectile has hit any enemies
 * @param  {object} projectile projectile to check hits
 * @returns {object} with a hit property noting if the projectile has hit anything and an enemy projectile with the enemy hit when applicable
 */
function checkEnemyHit(projectile){
    for(var enemy of enemies){
        if(Math.abs(projectile.x - enemy.x) < (((projectile.speed * 2) > 19) ? projectile.speed * 2 : 20)  && Math.abs(projectile.y - enemy.y) < (((projectile.speed * 2) > 19) ? projectile.speed * 2 : 20)){
            return {"hit":true,"enemy":enemy};
        }
    }
    return {"hit":false};
}
/**
 * Removes a projectile
 * @param  {} projectile the projectile to remove
 */
function removeProjectile(projectile){
    projectiles.splice(projectile.index,1);
}