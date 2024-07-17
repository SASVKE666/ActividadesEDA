class Graph{
    constructor(){
        this.nodes = {};
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.edges = [];
    }
}

Node.prototype.addEdge = function(node){
    this.edges.push(node);
};

Graph.prototype.addNode = function(value){
    this.nodes[value] = new Node(value);
};

Graph.prototype.addEdge = function(startValueNode, endValueNode){
    const startValue = this.nodes[startValueNode];
    const endValue = this.nodes[endValueNode];

    if(startValue && endValue){
        startValue.addEdge(endValue);
    }
};

Graph.prototype.show = function(){
        for (let node in this.nodes) {
            let edges = this.nodes[node].edges.map(edge => edge.value);
            console.log(`\[${node}\] → \[${edges.join("→")}\]`);
        }
};

const newGraph = new Graph();

newGraph.addNode(1);
newGraph.addNode(2);
newGraph.addNode(5);
newGraph.addNode(4);
newGraph.addNode(3);
newGraph.addNode(5);
newGraph.addNode(6);

newGraph.addEdge(1, 2);
newGraph.addEdge(1, 5);
newGraph.addEdge(2, 5);
newGraph.addEdge(2, 3);
newGraph.addEdge(2, 1);
newGraph.addEdge(3, 2);
newGraph.addEdge(3, 4);
newGraph.addEdge(4, 3);
newGraph.addEdge(4, 5);
newGraph.addEdge(4, 6);
newGraph.addEdge(5, 1);
newGraph.addEdge(5, 2);
newGraph.addEdge(5, 4);
newGraph.addEdge(6, 4);

console.log(newGraph);
console.log(newGraph.show());
