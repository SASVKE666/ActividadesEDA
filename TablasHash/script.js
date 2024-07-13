class HashTable{
    constructor (){
        this.size = 500; 
        this.table = new Array(this.size);
    }

    put(key, value) {
        const index = key % this.size;

        if(this.table[index] === undefined){
            this.table[index] = [];
        }
        
        const entry = {"key" : key, "value" :value};
        this.table[index].push(entry);
    }

    get(key) {
        const index = key % this.size;
        
        if(this.table[index] === undefined){
            return undefined;
        }

        const bucket = this.table[index];

        let values = []
        for(const entry of bucket){
            if(entry.key === key){
                return entry.value;
            }
        }
        return values.length ? values : null;
    }
}

const tablaHash = new HashTable;

tablaHash.put(0, "Jose")
tablaHash.put(6, "Diosito");
tablaHash.put(6, "Jesus")
console.log(tablaHash);
console.log(tablaHash.get(6));