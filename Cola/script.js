class Queue{
    #items = [];

    push(item){
        this.#items.push(item);
    }

    pop() {
        return this.isEmpty()? alert(`La cola esta vacia`) : this.#items.shift();
    }
    
    front() {
        return this.isEmpty()? null : this.#items[0];
    }
    
    isEmpty() {
        return this.#items.length === 0? true : false;
    }

    size() {
        return this.#items.length;
    }

    contains(item) {
        return this.#items.includes(item);
    }

    reset() {
        const removedItems = [];
        while (!this.isEmpty()) {
          removedItems.push(this.pop());
        }
        return removedItems;
    }

    print(){
        return this.#items;
    }


    nextElements(n) {
        if (n <= 0) {
          return alert(`Ingrese un numero mayor a 0`);
        }
        const nextElements = [];
        for (let i = 0; i < n && i < this.#items.length; i++) {
          nextElements.push(this.#items[i]);
        }
        return nextElements;
    }
      
}


const cola = new Queue;

function htmlPop(){
    cola.pop();
    htmlDraw();
}

function htmlPush(){
    let inputPush = document.querySelector("#input");
    if( !inputPush.value ){
        alert(`Ingresa algo estupido.`);
        return;
    }
    cola.push(inputPush.value);
    inputPush.value = "";
    htmlDraw();
}

function htmlEmpty(){
    alert(cola.isEmpty()? "La cola esta vacia" : `Hay elementos en la cola`)
}

function htmlFront(){
    let first = document.querySelector(".sign");
    first.computedStyleMap.background = "#86003c";
}

function htmlVaciar(){
    let longitud = cola.size();
    for (let index = 0; index < longitud; index++) {
        setTimeout(() => {
            cola.pop();
            htmlDraw();
        }, 500*(i + 1));
    }
}

function htmlDraw(){
    let contenedor = document.querySelector("#cola-contenedor");
    //hace referencia al elemnto en html
    contenedor.innerHTML = "";
    let valor = cola.print();
    for (let index = 0; index < valor.length; index++) {
        contenedor.insertAdjacentHTML("beforeend", 
            `<div class = "vergil">
                <img src = "vergil.jpg" />
                <p> ${valor[index]}</p>
            </div>`
        );
    }

}