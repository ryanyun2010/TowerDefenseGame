var path;
var enemies = [];
var projectiles = [];
var towers = [];
var health = 100;
var waves = [];
var wave;
var towerselectui;
var actionOccurredThisClick = false;
var coins = 100;
var currentEnemyID = 0;
function setup(){
    createCanvas(1300,700)
    path = new Path([{"x":0,"y":100},{"x":900,"y":150},{"x":300,"y":250},{"x":850,"y":350},{"x":500,"y":500},{"x":500,"y":700}])
    towerselectui = new TowerSelectUI(1000);
    towerselectui.setup();
    setupWaves();
    setIndexes(enemies);
    setIndexes(projectiles);
    setIndexes(towers);
    setIndexes(waves);
    wave = waves[0];
};
function draw(){
    background(50,255,50)
    path.draw();
    wave.update();
    setIndexes(waves);
    updateAndIndexArray(towers);
    updateAndIndexArray(enemies);
    updateAndIndexArray(projectiles);
    towerselectui.draw();
};
function mousePressed(){
    if(actionOccurredThisClick){ return;}
    towerselectui.clicked();
    actionOccurredThisClick = true;
};
function mouseReleased(){
    actionOccurredThisClick = false;
};