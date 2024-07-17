class HashTable {
  constructor() {
    this.size = 500;
    this.table = new Array(this.size);
  }
}

HashTable.prototype.hash = function(key){
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue = (hashValue * 31 + key.charCodeAt(i)) % this.size;
    }
    return hashValue;
};

HashTable.prototype.put = function (key, value) {
  const index = this.hash(key);

  if (this.table[index] === undefined) {
    this.table[index] = [];
  }

  const entry = { key: key, value: value };
  this.table[index].push(entry);
};

HashTable.prototype.get = function (key) {
  const index = this.hash(key);
  if (this.table[index] == undefined) {
    return null;
  }
  const bucket = this.table[index];

  let values = [];
  for (const buck of bucket) {
    if (buck.key == key) {
      values.push(buck.value);
    }
  }
  return values.length ? values : null;
};

const tablaHash = new HashTable();

tablaHash.put(0, "Jose");
tablaHash.put(6, "Diosito");
tablaHash.put(6, "Jesus");
console.log(tablaHash);
console.log(tablaHash.get(6));
