class LinkedList {
    constructor() {
        this.head = null;
    }

    add(item) {
            const nuevoNodo = new Node(item);
            if (this.head === null) {
            this.head = nuevoNodo;
        } else {
            let actualNodo = this.head;
            while (actualNodo.next) {
                actualNodo = actualNodo.next;
            }
            actualNodo.next = nuevoNodo;
        }
    }

    remove(item) {
        let currentNode = this.head;

        if (!currentNode) {
            return null;
        }

        if (this.head.item === item) {
            if (this.head.next === null) {
                //const removedItem = currentNode.item;
                this.head = null;
                return ;
            } else {
                this.head = currentNode.next;
            }


        }

        if (currentNode.next === null) {
            const removedItem = currentNode.item;
            currentNode = null;
            return removedItem;
        }


        while (currentNode.next) {
            if (currentNode.next.item === item) {
                currentNode.next = currentNode.next.next;
                return item;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    search(item) {

        if (!this.head) {
            return false;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.item === item) {
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }

    run() {
        const lista = [];
        let currentNode = this.head;

        if (!this.head) {
            //console.log("Lista vacía");
            return lista;
        }

        while (currentNode) {
            lista.push(currentNode.item);
            currentNode = currentNode.next;
        }

        //console.log("Lista completa:");
        return lista;
    }

    first(){
        let currentNode = this.head;
        if (!currentNode) {
            return null;
        }
        return currentNode.item;
    }

    size(){
        let count = 0;
        let currentNode = this.head;

        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }

        return count;
    }

    end(){
        let currentNode = this.head;

        if (!currentNode) {
            return null;
        }

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        return currentNode.item;
    }

    clear() {
        while (this.head) {
            this.head = this.head.next;
        } 
    }
}

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

function htmlClear(){

    lista.clear();
    htlmDibujar();
}

function htmlRemove(esta){
    console.log(esta.textContent);
    lista.remove(esta.textContent);
    htlmDibujar();
}

function htmlEnviar(event){

    event.preventDefault();
    let text = document.querySelector('#input');
    lista.add(text.value);
    //console.log(lista.run());
    text.value = "";
    htlmDibujar();
}

function htlmDibujar(){
    let contenedor = document.querySelector("#contenedor");
    contenedor.innerHTML = "";
    let datos = lista.run(); 

    if(!datos) 
        return null;

    for (let index = 0; index < datos.length; index++) {
        contenedor.insertAdjacentHTML("beforeend", `<span class = "elemento" onclick = 
            "htmlRemove(this)">${datos[index]}</span> -->`);
    }
}



const lista = new LinkedList;
/* lista.add("A");
lista.add("B");
lista.add("C");
lista.add("D");
console.log(lista.search("A"));
lista.remove("A");
console.log(lista.search("A"));
console.log(lista.search("B"));
console.log(lista.search("C"));
console.log(lista.search("D"));
lista.run();
lista.remove("B");
lista.remove("C");

console.log(lista.run());
console.log(lista.first());
console.log(lista.size());
lista.remove("D");
console.log(lista.size());
lista.add("A");
console.log(lista.end());
console.log(lista.size()); */
