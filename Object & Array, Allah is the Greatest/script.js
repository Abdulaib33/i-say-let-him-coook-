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

console.log(person.age)
person.age = 33
console.log("Age modified " +  person.age)

console.log("Your adress is " + person.address.street + ", " + person.address.city)
console.log("Addres got deleted " + delete person.address)
console.log(person.address)

person.isStudent = true 
console.log(person.isStudent)