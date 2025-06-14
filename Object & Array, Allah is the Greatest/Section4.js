// 🧱 SECTION 4: OBJECT UTILITIES & STRUCTURE

    // 12. Deeply clone an object:

        // Write deepClone(obj) using recursion.

        // Handle nested objects and arrays.

        // Avoid reference sharing between original and clone.


function deepClone(obj) {
    // Handle null or non-object types
    if (obj === null || typeof obj !== "object") {
        return obj;
    }


    // Hanlde arrays
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item))
    }

    // Handle objects
    const cloneObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key])
        }
    }

    return cloneObj
}


// Example usage:
const original = {
    name: "Alice",
    age: 30,
    hobbies: ['reading', "traveling"],
    address: {
        city: "Paris",
        zip: "75001"
    }
}

const cloned = deepClone(original);
cloned.address.city = "London"; // Changes cloned object, not the original

console.log(original.address.city); // Paris (unchanged)
console.log(cloned.address.city); // London (modified)




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



const users = {
    name: "Sam",
    role: "admin"
}

const usersEntries = Object.entries(users) // the object is turn in a Array
console.log(usersEntries) // [Array(2), Array(2)]
                            // 0 : (2) ['name', 'Sam']
                            // 1 :  (2) ['role', 'admin']
                            // length : 2

const usersEntriesBackToObject = Object.fromEntries(usersEntries) // turn the Array back to Object
console.log(usersEntriesBackToObject) // {name: 'Sam', role: 'admin'}