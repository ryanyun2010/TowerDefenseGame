/**
 * Helper class for the Tower Select UI class
 * @type {class}
 * @param  {object} ui the ui which the part is attached to
 * @param  {number} row the row which the part is on
 * @param  {number} col the column which the part is
 * @param  {string} color the color of the tower
 * @param  {string} type the name of the tower
 * @param  {string} description a description of the tower
 * @param  {number} cost the cost of the tower
 * @property {boolean} hovering whether the cursor is hovering over the part
 * @property {Function} constructor the constructor
 * @property {Function} draw draws the part on the UI
 * @property {Function} checkHover checks whether the cursor is hovering over the part
 */
class TowerSelectPart {
    constructor(ui, row, col, color, type, description, cost) {
        this.row = row;
        this.col = col;
        this.color = color;
        this.type = type;
        this.ui = ui;
        this.hovering = false;
        this.description = description;
        this.cost = cost;
    }
    draw() {
        fill("white");
        strokeWeight(4);
        rectMode(CENTER);
        rect(((this.col - 1) * 100) + 52.5 + this.ui.x, ((this.row - 1) * 150) + 87.5, (this.hovering) ? 85 : 75, (this.hovering) ? 85 : 75);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(this.ui.x + 52 + (100 * (this.col - 1)), 85 + (150 * (this.row - 1)), (this.hovering) ? 55 : 50, (this.hovering) ? 55 : 50)
        textSize(20);
        strokeWeight(0);
        textStyle(BOLD);
        rectMode(CORNER);
        text(this.type, this.ui.x + 15 + (100 * (this.col - 1)), 130 + (150 * (this.row - 1)), 75)
    }
    checkHover() {
        if (mouseX > this.ui.x + (15 + ((this.col - 1) * 100)) && mouseX < this.ui.x + (115 + ((this.col - 1) * 100)) && mouseY > (50 + (this.row - 1) * 150) && mouseY < (200 + (this.row - 1) * 150)) {
            this.hovering = true;
        } else {
            this.hovering = false;
        }
        return this.hovering;
    }
}
/**
 * Tower Select UI class
 * @type {class}
 * @param  {object} x the x coordinate of the UI
 * @property {array} towers the towerSelectParts in the UI
 * @property {object | undefined} currentlySelected the towerSelectPart currently selected
 * @property {Function} setup sets up the towerSelectParts
 * @property {Function} draw draws the UI
 * @property {Function} clicked called when the user clicks anywhere on the screen, either selects a tower or places a tower
 */
class TowerSelectUI {
    constructor(x) {
        this.x = x;
        this.towers = [];
        this.currentlySelected = undefined;
    }
    setup() {
        this.towers.push(new TowerSelectPart(this, 1, 1, "blue", "Machine Gunner", "fires very quickly with low damage", 150));
        this.towers.push(new TowerSelectPart(this, 1, 2, "yellow", "Dart Shooter", "fires at a mediocre rate with mediocre damage", 75));
        this.towers.push(new TowerSelectPart(this, 1, 3, "grey", "Sprayer", "sprays bullets all over, with mediocre damage", 100));
        this.towers.push(new TowerSelectPart(this, 2, 1, "black", "Sniper", "high damage, high range, very low fire rate", 75));
    }
    draw() {
        rectMode(CORNER);
        fill(230, 230, 230);
        stroke("black");
        strokeWeight(10);
        rect(this.x, -5, (1300 - this.x) + 5, 710)

        strokeWeight(4);
        // grid cells
        textAlign(CENTER);
        for (var tower of this.towers) {
            tower.checkHover();
            tower.draw();
        }
        textSize(30);
        strokeWeight(0);
        textStyle(BOLD);
        rectMode(CORNER);
        textAlign(LEFT);
        text("Coins: " + coins, this.x + 10, 35)
        for (var tower of this.towers) {
            if (tower.checkHover()) {
                rectMode(CORNER);
                fill(230, 230, 230);
                stroke("black");
                strokeWeight(10);
                rect(this.x - 320, 100, 300, 400)
                noStroke();
                fill('black');
                text(tower.description,this.x - 300, 120,250)
                text(tower.cost + " coins",this.x - 300, 450,300)
            }
        }
        if(this.currentlySelected != undefined && mouseX < this.x) {
        fill(this.currentlySelected.color);
        stroke("black");
        strokeWeight(4)
        ellipse(mouseX,mouseY,50,50)
        fill(255,255,255,50);
        noStroke();
        var range = findRange(this.currentlySelected.type);
        ellipse(mouseX,mouseY,range * 2,range * 2);
        }
        if(register[27]){
            this.currentlySelected = undefined;
        }
        
    }

clicked() {
    if (mouseX > this.x) {
        for (var tower of this.towers) {
            if (tower.checkHover() && coins >= tower.cost) {
                this.currentlySelected = tower;
            }
        }
    } else {
        if (this.currentlySelected != undefined) {
            console.log(this.currentlySelected.type);
            if(coins >= this.currentlySelected.cost){
            createTower(mouseX, mouseY, this.currentlySelected.type);
            coins -= this.currentlySelected.cost;
            this.currentlySelected = undefined;
            }
        }
    }
};
}