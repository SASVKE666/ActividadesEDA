class Stack{

    #items = [];

    constructor () {};

    push(item){
        this.#items.push(item);
    }

    pop(){
        if(this.#items.length > 0){
            console.log(`El elmento ${this.#items.pop()} esta eliminado.`);
        }   else    {
            throw new Error("La pila esta vacia"); 
        }
    }

    isEmpty(){
        return this.#items.length === 0 ? true : false;
    }    

    top(){
        return console.log(`El elemento ${this.#items[this.#items.length - 1]} esta en el top.`);
    }

    find(item){
        return alert(this.#items.includes(item) === true ? `El elemento ${item} si se encuentra.` : 
        `El elemento ${item} no se encuentra.`);
    }

    removeByValue (item){
        this.#items = this.#items.filter(value => value != item);
    }

    removeAt (index){
        if(index < 0 || index >= this.#items.length){
            throw new Error("Indice fuera de rango.");
        }
        const removedItem = this.#items.splice(index,1)[0];

        return console.log(`
            El elemento de indice: ${index}. 
            Conocido como: ${removedItem}.
            Esta eliminado.`);
    }

    printTec(){
        console.log([this.#items].reverse());
    }

    print(){
        return this.#items;
    }

    replaceFirst(find, value) {
        for (let i = this.#items.length - 1; i >= 0; i--) {
            if (this.#items[i] === find) {
                this.#items[i] = value;
                return this;
            }
        }
        return this;
    }

}

const pila = new Stack();

function htmlPush(){
    let value = document.querySelector("#value");
    if( !value.value ){
        alert(`Ingresa algo estupido.`);
        return;
    }
    pila.push( value.value );
    value.value = "";
    htmlDibujarPila();
}

function htmlPop(){
    pila.pop();
    htmlDibujarPila();
}

function htmlEmpty(){
    alert(pila.isEmpty() ? `La pila esta vacia ` :` La pila tiene elementos`)
}

function htmlTop(){
    if(!pila.isEmpty()){
        let ultimoElemento = document.querySelector(".plato");
        ultimoElemento.style.background = "yellow"
    }
}

function htmlDibujarPila(){
    let contenedor = document.querySelector("#pila");
    contenedor.innerHTML = "";
    let elementos = pila.print();
    
    for(let i = 0; i < elementos.length; i++){
        contenedor.insertAdjacentHTML("afterbegin", `<div class = "plato">${elementos[i]}</div>`);
    }
}

function replaceFirst() {
  let findInput = document.querySelector("#find");
  let valueInput = document.querySelector("#newValue");
  let findValue = findInput.value;
  let newValue = valueInput.value;

  if (!findValue ||!newValue) {
    alert("Por favor, ingrese ambos valores");
    return;
  }

  pila.replaceFirst(findValue, newValue);
  htmlDibujarPila();
  findInput.value = "";
  valueInput.value = "";
}

/* pila.push("Plato 1");
pila.push("Plato 2");
pila.push("Plato 3");
pila.push("Plato 4");
pila.pop();
pila.top();
pila.find("Plato 1");
pila.find("JOJOJOJORGEFALCON");
pila.removeByValue("Plato 3");
pila.top();
pila.removeAt(0);
pila.push("Plato 2");
pila.push("Plato 3");
pila.push("Plato 4");
pila.print(); */