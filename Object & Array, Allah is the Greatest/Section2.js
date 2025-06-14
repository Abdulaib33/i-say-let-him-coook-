// 🔁 SECTION 2: ARRAY METHODS MASTERY

// 5. map() exercise:
    // Given prices: [100, 200, 300], return array with 10% tax added.
    // => [110, 220, 330]


const prices = [100, 200, 3000]

// map() transforms each element in an array and returns a new array with modified values.

// map() is like applying a makeover to every item in a list.

const pricesWithTax = prices.map(price => price * 1.1)
console.log(pricesWithTax)




// 6. filter() challenge:
    // From users array, remove all users under 18.
        // const users = [
        //     { name: 'John', age: 15 },
        //     { name: 'Jane', age: 22 },
        //     { name: 'Bob', age: 17 },
        // ];


const users = [
    {name: 'John', age: 15},
    {name: 'Jane', age: 22},
    {name: 'Bob', age: 17},
    {name: 'Abdoulaye', age: 22}
]

// filter() removes elements that don’t meet a condition and returns a new array with only the ones that do.

// filter() is like sorting the list, keeping only specific items.

const filteredUsers = users.filter(user => user.age >= 18)
console.log(filteredUsers)





// 7. reduce() power:
 // Use reduce() to:
    // Sum an array: [10, 20, 30] → 60
    // Group users by age group (<18, 18-29, 30+).
    // Count word frequencies in an array: ["a", "b", "a"] → { a: 2, b: 1 }


    
const nums = [10, 20, 30]

const numSum = nums.reduce((acc, curr) => acc + curr)
console.log(numSum)

// Imagine the accumulator is like a car. 🚗

// If the accumulator (acc) is behind, it's like someone standing in front 
// of the car, throwing letters like baseballs. Since the car has no glass 
// in the front, every letter lands in the back. This means we build the 
// string in normal order.

// But if we put the accumulator in front, it's like the car is driving forward, 
// and someone is throwing letters from behind with the trunk open. Every letter 
// lands at the front of the car, meaning we build the string in reverse order.

// That's how reduce() can reverse text! 🏎️⚾


const users1 = [
     {name: "Alice", age: 17},
     {name: "Bob", age: 25},
     {name: "Charlie", age: 33},
     {name: "Dave", age: 15}
]


const groups = users1.reduce((acc, curr) => {
  const ageGroup = curr.age < 18 ? "<18" : curr.age < 30 ? "18-29" : "30+"; 
  // our ageGroup is a ternary function, it curr.age is < 18 then "<18" if not, then "18-29" if not, then "30+"
  acc[ageGroup] = acc[ageGroup] || []; // and here it we will have for exemple acc["<18"] = acc["<18"] || [], ok ok, it's litteraly like this the acc["<18"] = { acc["<18"] : [] }
  // but our acc["<18"] doesnt exist since it's in a "{}", because in a "{}" we only have 'key["<18"]: value[]'
  acc[ageGroup].push(curr.name); // so here with this push, the acc["<18"].push("Alice") will be key["<18"]: ["Alice"]
  return acc; 
}, {}); // it start from here, in a "{}"

console.log(groups);
// Output: { "<18": ["Alice"], "18-29": ["Bob"], "30+": ["Charlie"] }





const users2 = [
  { name: "Alice", city: "New York" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" },
  { name: "David", city: "Tokyo" }
];

const city = users2.reduce((acc, curr) => {
    const cityGroup = curr.city;
    if (!acc[cityGroup]) {
        acc[cityGroup] = []
    }

    acc[cityGroup].push(curr.name)
    return acc
}, {})

console.log(city)




function countWords(arr) {
    
    return arr.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1
        return acc
    }, {})

}


const word = ["a", "b", "c"]
console.log(countWords(word))










// 8. Array transformation combo:
    // Flatten [[1], [2, 3], [4]] using .flat()
    // onvert [1, 2, 3] → ['#1', '#2', '#3'] using map().


const numsToFlat = [[1], [2, 3], [4]].flat()
console.log(numsToFlat) // [1, 2, 3, 4]



const numsToConvert = [1, 2, 3]

const converted = numsToConvert.map(value => `#${value}`)
console.log(converted)