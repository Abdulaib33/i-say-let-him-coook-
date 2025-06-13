// 🔁 SECTION 2: ARRAY METHODS MASTERY

// 5. map() exercise:
    // Given prices: [100, 200, 300], return array with 10% tax added.
    // => [110, 220, 330]


const prices = [100, 200, 3000]

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

const filteredUsers = users.filter(user => user.age >= 18)
console.log(filteredUsers)