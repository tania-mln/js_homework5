let obj = {
    name: "Tetiana",
    age: 24,
    occupation: "Tester"
};

obj.getInfo = function() {
    for (let key in this) {
        if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
            console.log(`${key}: ${this[key]}`);
        }
    }
};

obj.getInfo(); // Outputs: name: Tetiana, age: 24, occupation: Tester

obj.newProperty = "New property";

obj.getInfo(); // Outputs: name: Tetiana, age: 24, occupation: Tester, newProperty: New property
