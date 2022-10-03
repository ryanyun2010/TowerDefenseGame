/**
 * The current path which enemies follow
 * @type {object}
 */
var path;
/**
 * The enemies spawned
 * @type {array}
 */
var enemies = [];
/**
 * The projectiles spawned
 * @type {array}
 */
var projectiles = [];
/**
 * The towers placed
 * @type {array}
 */
var towers = [];
/**
 * The health of the player
 * @type {number}
 */
var health = 100;
/**
 * The waves
 * @type {array}
 */
var waves = [];
/**
 * The current wave
 * @type {object}
 */
var wave;
/**
 * The tower selection ui
 * @type {object}
 */
var towerselectui;
/**
 * True if an action has already occurred since thee mouse has been pressed and not released
 * @type {boolean}
 */
var actionOccurredThisClick = false;
/**
 * The amount of coins the player has
 * @type {number}
 */
var coins = 100;
/**
 * The ID of enemies spawned
 * @type {number}
 */
var currentEnemyID = 0;
/**
 * Setups the variables for the game
 * @type {function}
 */
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
/**
 * Draws the game
 * @type {function}
 */
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
/**
 * Checks for mouse presses
 * @type {function}
 */
function mousePressed(){
    if(actionOccurredThisClick){ return;}
    towerselectui.clicked();
    actionOccurredThisClick = true;
};
/**
 * Checks for mouse releases
 * @type {function}
 */
function mouseReleased(){
    actionOccurredThisClick = false;
};