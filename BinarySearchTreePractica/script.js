class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    //Si value ya esta en el arbol no lo agrega
    if (value === this.value) {
      return;
    }

    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinaryTree(value);
      } else {
        this.left.add(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinaryTree(value);
      } else {
        this.right.add(value);
      }
    }
  }

  search(value) {
    return this.runSearch(this, value);
  }

  runSearch(node, value) {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    }

    if (value < node.value) {
      return this.runSearch(node.left, value);
    } else {
      return this.runSearch(node.right, value);
    }
  }

  remove(value) {
    if (!this.contains(value)) return; // Verificar si el valor existe en el árbol

    if (value < this.value) {
      if (this.left) this.left.remove(value);
    } else if (value > this.value) {
      if (this.right) this.right.remove(value);
    } else {
      if (!this.left && !this.right) {
        this.value = null;
        this.left = null;
        this.right = null;
      } else if (!this.left) {
        this.value = this.right.value;
        this.left = this.right.left;
        this.right = this.right.right;
      } else if (!this.right) {
        this.value = this.left.value;
        this.right = this.left.right;
        this.left = this.left.left;
      } else {
        let minNode = this.right.findMin();
        this.value = minNode.value;
        this.right.remove(minNode.value);
      }
    }
  }
  findMin() {
    if (!this.left) {
      return this;
    } else {
      return this.left.findMin();
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      return this.left ? this.left.contains(value) : false;
    } else {
      return this.right ? this.right.contains(value) : false;
    }
  }

  removeReAsign(value) {
    return this.runRemove(this, value);
  }

  runRemoveReAsign(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.runRemove(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.runRemove(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let successor = this.findMinNode(node.right);
        node.value = successor.value;
        node.right = this.runRemove(node.right, successor.value);
        return node;
      }
    }
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  getPreOrden() {
    this.runPreOrden(this);
  }

  runPreOrden(node) {
    if (node == null) {
      return;
    }

    console.log(node.value);
    node.runPreOrden(node.left);
    node.runPreOrden(node.right);
  }

  getInOrden() {
    this.runInOrden(this);
  }

  runInOrden(node) {
    if (node === null) {
      return;
    }

    this.runInOrden(node.left);
    console.log(node.value);
    this.runInOrden(node.right);
  }

  getPostOrden() {
    this.runPostOrden(this);
  }

  runPostOrden(node) {
    if (node === null) {
      return;
    }

    this.runPostOrden(node.left);
    this.runPostOrden(node.right);
    console.log(node.value);
  }
}

const raiz = new BinaryTree(100);
raiz.add(50);
raiz.add(70);
raiz.add(20);
raiz.add(120);
raiz.add(150);
raiz.add(110);
raiz.add(70);
console.log(raiz);
console.log(raiz.search(100));
raiz.remove(100);
console.log(raiz);
