// 🧱 SECTION 4: OBJECT UTILITIES & STRUCTURE

    // 12. Deeply clone an object:

        // Write deepClone(obj) using recursion.

        // Handle nested objects and arrays.

        // Avoid reference sharing between original and clone.







// 13. Merge two objects:

    // const a = { name: "John", age: 20 };

    // const b = { age: 22, city: "Paris" };

    // Output: { name: "John", age: 22, city: "Paris" }

    // Use both Object.assign() and spread syntax.



const a = {
    name: "John",
    age: 20
}

const b = {
    age: 22,
    city: "Paris"
}


const MergeAssign = Object.assign({}, a, b) // {name: 'John', age: 22, city: 'Paris'}

console.log(MergeAssign)

const spreadAssign = Object.aissgn = {...a, ...b} // {name: 'John', age: 22, city: 'Paris'}

console.log(spreadAssign)





// 14. Convert object → entries → object

    // const user = { name: 'Sam', role: 'admin' };

        // Object.entries() → [['name', 'Sam'], ['role', 'admin']]

        // Object.fromEntries() → back to object

