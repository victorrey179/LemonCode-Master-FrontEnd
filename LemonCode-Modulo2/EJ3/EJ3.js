//clone
function clone(source) {
    return Object.assign({}, source);
}

const source = { name: "Víctor", age: 23 };
const target = clone(source);

console.log(target); // { name: "Víctor", age: 23 }
console.log(target === source); // false
console.log(target.name === source.name); // true
console.log(target.age === source.age); // true

//merge
function merge(source, target) {
    const merged = clone(target);
    Object.assign(merged, source);
    return merged;
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}