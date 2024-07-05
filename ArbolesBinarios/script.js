class BinaryTree{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const raiz = new BinaryTree(1);
raiz.left = new BinaryTree(2);
raiz.left.left = new BinaryTree(4);
raiz.left.right = new BinaryTree(5); 
raiz.right = new BinaryTree(3);
raiz.right.left = new BinaryTree(6); 
raiz.right.right = new BinaryTree(7); 
console.log(raiz);

const arbolBinarioNoLleno = new BinaryTree(8);
arbolBinarioNoLleno.left = new BinaryTree(3);
arbolBinarioNoLleno.right = new BinaryTree(10);
arbolBinarioNoLleno.left.left = new BinaryTree(1);
arbolBinarioNoLleno.left.right = new BinaryTree(6);
arbolBinarioNoLleno.left.right.left = new BinaryTree(4);
arbolBinarioNoLleno.left.right.right = new BinaryTree(7);
arbolBinarioNoLleno.right.right = new BinaryTree(14);
arbolBinarioNoLleno.right.right.left = new BinaryTree(13);