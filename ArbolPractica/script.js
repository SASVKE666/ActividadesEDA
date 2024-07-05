class Tree {
  constructor() {
    this.root = null;
  }

  add(value, find = null) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    if (!find) {
      let branchIndex = 1;

      while (this.root[`branch${branchIndex}`]) {
        branchIndex++;
      }

      this.root[`branch${branchIndex}`] = newNode;
      return this;
    }

    return this.addBySearch(value, find, this.root);
  }

  addBySearch(value, find, node) {
    if (node.value === find) {
      let branchIndex = 1;
      while (`branch${branchIndex}` in node) {
        branchIndex++;
      }
      node[`branch${branchIndex}`] = new Node(value);
    } else {
      for (let branchIndex in node) {
        if (node[branchIndex] instanceof Node) {
          this.addBySearch(value, find, node[branchIndex]);
        }
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
  }
}

const arbol = new Tree();
arbol.add(10);
arbol.add(5);
arbol.add(2);
arbol.add(1, 5);
arbol.add(8, 5);
arbol.add(100, 2);
arbol.add(20, 2);
arbol.add(9, 2);
arbol.add(999, 20);

const arbol651 = new Tree;
arbol651.add(1);
arbol651.add(2);
arbol651.add(3);
arbol651.add(4);
arbol651.add(5, 2);
arbol651.add(6, 2);
arbol651.add(7, 4);

const arbol652 = new Tree;
arbol652.add("John");
arbol652.add("Steve");
arbol652.add("Rohan");
arbol652.add("Lee", "Steve");
arbol652.add("Bob", "Steve");
arbol652.add("Ella", "Steve");
arbol652.add("Sal", "Rohan");
arbol652.add("Emma", "Rohan");
arbol652.add("Tom", "Emma");
arbol652.add("Raj", "Emma");
arbol652.add("Bill", "Tom");