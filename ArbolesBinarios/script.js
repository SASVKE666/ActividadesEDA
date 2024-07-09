class BinaryTree{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    getPreOrden(){

        this.runPreOrden(this);
    }

    runPreOrden(node){
        if(node == null){
            return;
        }

        console.log(node.value);
        node.runPreOrden(node.left);
        node.runPreOrden(node.right);
    }

    getInOrden(){
        this.runInOrden(this);
    }

    runInOrden(node){
        if (node === null) {
            return;
        }

        this.runInOrden(node.left);
        console.log(node.value);
        this.runInOrden(node.right);
    }

    getPostOrden(){
        this.runPostOrden(this);
    }

    runPostOrden(node){
        if(node === null){
            return;
        }

        this.runPostOrden(node.left);
        this.runPostOrden(node.right);
        console.log(node.value);
    }
}

const raiz = new BinaryTree(1);
raiz.left = new BinaryTree(2);
raiz.left.left = new BinaryTree(4);
raiz.left.right = new BinaryTree(5); 
raiz.right = new BinaryTree(3);
raiz.right.left = new BinaryTree(6); 
raiz.right.right = new BinaryTree(7); 
//raiz.getPreOrden();


const arbolBinarioNoLleno = new BinaryTree(8);
arbolBinarioNoLleno.left = new BinaryTree(3);
arbolBinarioNoLleno.right = new BinaryTree(10);
arbolBinarioNoLleno.left.left = new BinaryTree(1);
arbolBinarioNoLleno.left.right = new BinaryTree(6);
arbolBinarioNoLleno.left.right.left = new BinaryTree(4);
arbolBinarioNoLleno.left.right.right = new BinaryTree(7);
arbolBinarioNoLleno.right.right = new BinaryTree(14);
arbolBinarioNoLleno.right.right.left = new BinaryTree(13);
//arbolBinarioNoLleno.getPostOrden();


// Árbol aritmético 19
const arbolAritmetico = new BinaryTree('+');
arbolAritmetico.left = new BinaryTree('*');
arbolAritmetico.left.left = new BinaryTree('-');
arbolAritmetico.left.left.left = new BinaryTree('*');
arbolAritmetico.left.left.left.left = new BinaryTree('5');
arbolAritmetico.left.left.left.right = new BinaryTree('+');
arbolAritmetico.left.left.left.right.left = new BinaryTree('2');
arbolAritmetico.left.left.left.right.right = new BinaryTree('2');
arbolAritmetico.left.left.right = new BinaryTree('7');
arbolAritmetico.left.right = new BinaryTree('+');
arbolAritmetico.left.right.left = new BinaryTree('2');
arbolAritmetico.left.right.right = new BinaryTree('7');
arbolAritmetico.right = new BinaryTree('-');
arbolAritmetico.right.left = new BinaryTree('10');
arbolAritmetico.right.right = new BinaryTree('*');
arbolAritmetico.right.right.left = new BinaryTree('+');
arbolAritmetico.right.right.left.left = new BinaryTree('6');  
arbolAritmetico.right.right.left.right = new BinaryTree("8");  
arbolAritmetico.right.right.right = new BinaryTree('-1');  




// Árbol con letras
const arbolLetrado = new BinaryTree('F');
arbolLetrado.left = new BinaryTree('B');
arbolLetrado.right = new BinaryTree('G');
arbolLetrado.right.right = new BinaryTree('I');
arbolLetrado.right.right.left = new BinaryTree('H');
arbolLetrado.left.left = new BinaryTree('A');
arbolLetrado.left.right = new BinaryTree('D');
arbolLetrado.left.right.left = new BinaryTree('C');
arbolLetrado.left.right.right = new BinaryTree('E');


// Árbol no lleno
const arbolNoLleno = new BinaryTree(4);
arbolNoLleno.left = new BinaryTree(2);
arbolNoLleno.left.right = new BinaryTree(3);
arbolNoLleno.right = new BinaryTree(8);
arbolNoLleno.right.left = new BinaryTree(6);
arbolNoLleno.right.right = new BinaryTree(9);
arbolNoLleno.right.left.left = new BinaryTree(5);
arbolNoLleno.right.left.right = new BinaryTree(7);


// Árbol numérico
const arbolNumerico = new BinaryTree(45);
arbolNumerico.left = new BinaryTree(15);
arbolNumerico.left.left = new BinaryTree(10);
arbolNumerico.left.left.right = new BinaryTree(12);
arbolNumerico.left.right = new BinaryTree(20);
arbolNumerico.right = new BinaryTree(79);
arbolNumerico.right.left = new BinaryTree(55);
arbolNumerico.right.left.left = new BinaryTree(50);
arbolNumerico.right.right = new BinaryTree(90);


// Árbol de emoticonos
//🍄🌼🌻🍁🍂🌹🌷🌺🌱
const arbolEmoticon = new BinaryTree('🌳');
arbolEmoticon.left = new BinaryTree('🌸');
arbolEmoticon.left.left = new BinaryTree('🌼');
arbolEmoticon.left.left.left = new BinaryTree('🌹');
arbolEmoticon.left.left.right = new BinaryTree('🌷');
arbolEmoticon.left.right = new BinaryTree('🌻');
arbolEmoticon.left.right.left = new BinaryTree('🌺');
arbolEmoticon.left.right.right = new BinaryTree('🌱');
arbolEmoticon.right = new BinaryTree('🍄');
arbolEmoticon.right.left = new BinaryTree('🍁');
arbolEmoticon.right.right = new BinaryTree('🍂');


// Árbol organizacional
const arbolOrganizacional = new BinaryTree('judy');
arbolOrganizacional.left = new BinaryTree('bill');
arbolOrganizacional.left.left = new BinaryTree('alice');
arbolOrganizacional.left.right = new BinaryTree('fred');
arbolOrganizacional.left.right.left = new BinaryTree('dave');
arbolOrganizacional.left.right.right = new BinaryTree('jane');
arbolOrganizacional.left.right.right.right = new BinaryTree('joe');
arbolOrganizacional.right = new BinaryTree('mary');
arbolOrganizacional.right.right = new BinaryTree('tom');


// Árbol personal
const arbolPersonal = new BinaryTree('Abuelo');
arbolPersonal.left = new BinaryTree('Tio');
arbolPersonal.left.left = new BinaryTree('Prima');
arbolPersonal.left.right = new BinaryTree('Primo');
arbolPersonal.right = new BinaryTree('Padre');
arbolPersonal.right.left = new BinaryTree('Hermana');
arbolPersonal.right.right = new BinaryTree('Yo');
console.log('PreOrden')
arbolPersonal.getPreOrden();
console.log('InOrden');
arbolPersonal.getInOrden();
console.log('PostOrden');
arbolPersonal.getPostOrden();

