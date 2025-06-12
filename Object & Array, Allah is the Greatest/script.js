// 🧠 SECTION 1: CORE OBJECTS & ARRAYS


// 1. Create a person object:
    // Add keys: name, age, address (object with street, city)
    // Access all properties using both dot and bracket notation.
    // Modify age, delete address, and add isStudent = true.


const person = {
    name: "Abdoulaye",
    age: 22,
    address: {
        street: "Rue de Hesbaye 206",
        city: "Liège"
    }
}

console.log(person.age) // 22
person.age = 33
console.log("Age modified " +  person.age) // Age modified 33

console.log("Your adress is " + person.address.street + ", " + person.address.city) // Your adress is Rue de Hesbaye 206, Liège
console.log("Addres got deleted " + delete person.address) // Addres got deleted 'true'
console.log(person.address) // undefined

person.isStudent = true 
console.log(person.isStudent) // true




// 2. Write a function updateProp(obj, key, value)
    // Updates any key in any object dynamically.
    // Test with: updateProp(person, 'name', 'Alice')

function updateProp(obj, key, value) {

    if (obj && typeof obj === "object") {
        obj[key] = value
    }

}

const person1 = {

    name: "Abdoulaye",
    age: 22
    
}

console.log(updateProp(person1, "name", "Serviteur d'Allah"))
console.log(person1.name) // Serviteur d'Allah

console.log(updateProp(person1, "age", 33)) 
console.log(person1.age) // 33

console.log(updateProp(person1, "address", { street: "Rue Hesbaye 206", city: "Liège"}))
console.log(person1.address.street) // Rue Hesbaye 206
console.log(person1.address.city) // Liège



