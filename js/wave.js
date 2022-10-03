/**
 * Wave Class
 * @type {class}
 * @param  {object} data the data of the wave stored as enemies and the number of frames before sending the enemy
 * @property {number} time the number of frames passed
 * @property {number} index the index of the wave in the waves array
 * @property {Function} sendEnemies sends enemies based on time
 * @property {Function} checkIfWaveOver checks if there are any enemies left to send
 * @property {Function} update increases the time, sends enemies and checks if the wave is over
 */
class Wave{
    constructor(data){
        this.data = data;
        this.time = 0;
        this.index = 0;
    }
    sendEnemies(){
        for(var datapoint of this.data){
            if(datapoint.time == this.time){
                datapoint.enemy.id = currentEnemyID;
                currentEnemyID++;
                enemies.push(datapoint.enemy);
            }
        }
    }
    checkIfWaveOver(){
        for(var datapoint of this.data){
            if(datapoint.time > this.time){
                return;
            }
        }
        if(enemies.length < 1){
        waveOver(this);
        }
    }
    update(){
        this.time++;
        this.sendEnemies();
        this.checkIfWaveOver();
    }
}