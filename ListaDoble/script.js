class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addEnd(item) {
        const newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    remove(item) {

        if (!this.head) {
            return false;
        }

        if (this.head.item === item) {
            if (this.head === this.tail) {
                this.head = null
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        }

        if (this.tail.item === item) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        let currentNode = this.head.next;

        while (currentNode) {
            if (currentNode.item === item) {
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    run() {
        const lista = [];
        let currentNode = this.tail;

        if (!this.tail) {
            return false;
        }

        while (currentNode) {
            lista.push(currentNode.item);
            currentNode = currentNode.prev;
        }
        return lista;
    }

    search(item) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.item === item) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    replace(oldItem, newItem) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.item === oldItem) {
                currentNode.item = newItem;
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    clear() {
        this.head = null;
        this.tail = null;
    }
}

const dobleLista = new DoublyLinkedList;

dobleLista.addEnd(1);
dobleLista.addEnd(2);
dobleLista.addEnd(3);
dobleLista.remove(1);
console.log(dobleLista.run());
