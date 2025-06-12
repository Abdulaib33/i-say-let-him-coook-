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





// 3. Loop over an object:
    // Use for...in, Object.keys(), Object.entries() to:
        // Print all keys.
        // Print all values.
        // Print "key: value" pairs.


const person2 = {
    name: "Abdoulaye",
    age: 22,
    address: {
        street: "Rue de Hesbaye 206",
        city: "Liège"
    }
}

for (let x in person2) {
    console.log(x) // name, age, address

    console.log(person2[x]) // name
                            // Abdoulaye
                            // age
                            // 22
                            // address
                            // {street: 'Rue de Hesbaye 206', city: 'Liège'}
}

Object.keys(person2).forEach(key => console.log(key)) // name, age, address

Object.values(person2).forEach(value => console.log(value)) // Abdoulaye, 22, {street: 'Rue de Hesbaye 206, city: 'Liège'}

Object.entries(person2).forEach(entries => console.log(entries)) 

Object.entries(person2).forEach(([key, value]) => console.log(key)) // name, age, address
Object.entries(person2).forEach(([key, value]) => console.log(value)) // Abdoulaye, 22, {street: 'Rue de Hesbaye 206', city: 'Liège'}

Object.entries(person2).forEach(([key, value]) => console.log(`Key '${key}': value: '${value}'`)) // Key 'name': value: 'Abdoulaye'
                                                                                                  // Key 'age': value: '22
                                                                                                  // Key 'address': value: '[object Object]'






// 4. Work with arrays manually:
    // Create an array nums = [2, 4, 6, 8, 10]
    // Add, remove, and replace values with push, pop, splice.
    // Write a function to reverse the array without using .reverse().

const nums = [2, 4, 6, 8, 10]

// Add values
nums.push(12);      // Adds 12 at the end
nums.unshift(0);    // Adds 0 at the beginning
console.log(nums);  // [0, 2, 4, 6, 8, 10, 12]

// Object.values(nums).forEach(value => console.log(value)) // 2, 4, 6, 8, 10

nums.push(12) // Add nums DONE ✅
// Object.values(nums).forEach(value => console.log(value)) // 2, 4, 6, 8, 10, 12


// Remove values
nums.pop();        // Removes last element (12)
nums.shift();      // Removes first element (0)
console.log(nums); // [2, 4, 6, 8, 10]

nums.pop() // remove nums DONE ✅
// Object.values(nums).forEach(value => console.log(value)) // 2, 4, 6, 8, 10



// Replace values using splice
nums.splice(2, 1, 99); // Replace the element at index 2 with 99
console.log(nums);      // [2, 4, 99, 8, 10]

// let explain further this part, why does nums.splice(2, 1, 99) replace the 6 with 99, when replacing with splice for in our exemple here 2 is our index(0,1,2) normal and the 1 is remove 1 value after the postion index 2, then it will remove 6, but since we have add 99 after, it will take 99 and replace it with 6, that's how the code works, go read the others comment below you will understand what does the splice do exactly and you will understand this more easily 

//nums.splice(1) // the splice is very easy, here we say after the first position which is 2, remove everything after
// Object.values(nums).forEach(value => console.log(value)) // 2

nums.splice(1, 3) // here's another simple exemple, we say at position 1 which is 2, remove 3 values after it, and the result will be that we will only have 2, 10, because between 2 and 10 there was 3 value that has been removed by the spliced
Object.values(nums).forEach(value => console.log(value)) // 2, 10


function reverseArray(arr) {
    let reversed = []
    for (let i = arr.length -1; i >= 0; i--) { //it will say i is arr.length and then it verify the i >= 0, if it's, it will do reversed.push(arr[i]) and then ONLY then it will remove 1 from the i, after it repeat what we just explain
        reversed.push(arr[i])
    }
    return reversed // we return reversed, that means our code in our function reverseArray stop here
}

let reversedNums = reverseArray(nums)
console.log(reversedNums)

