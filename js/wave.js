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