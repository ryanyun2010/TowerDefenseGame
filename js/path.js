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