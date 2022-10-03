/**
 * Path Class
 * @type {class}
 * @param  {array} nodes array of the nodes of the path, expressed as an array of objects with x and y properties
 * @property {object} start the first node of the path
 * @property {object} end the last node of the path
 * @property {Function} constructor constructor
 * @property {Function} draw draws the path
 */
class Path{
    constructor(nodes){
        this.nodes = nodes;
        this.end = nodes[nodes.length - 1];
        this.start = nodes[0];
    }

    draw(){
        stroke("black");
        strokeWeight(5);
        for(var i = 0; i < this.nodes.length - 1; i ++){
            line(this.nodes[i].x,this.nodes[i].y,this.nodes[i+1].x,this.nodes[i+1].y);
        }
    }
}