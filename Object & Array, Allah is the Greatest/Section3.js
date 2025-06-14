// 9. Use some() and every():
    // Check if any number is negative in [-5, 2, 10]

    // Check if all users are isActive: true




const nums = [-5, 2, 10]

const hasNegative = nums.some(num => num < 0)
console.log(hasNegative)





const users = [
    {   
        name: "Abdoulaye",
        age: 22,
        isActive: true
    }
    ]

const userActive = users.every(user => user.isActive)

console.log(userActive)





// 10. find() + findIndex():

    // Find the first product with stock === 0

    // Find index of a post by id from an array of posts.


const products = [
    {id: 1, name: "Laptop", stock: 10},
    {id: 2, name: "Phone", stock: 10},
    {id: 3, name: "Tablet", stock: 0},
    {id: 4, name: "Monitor", stock: 0},
    {id: 5, name: "Television", stock: 0},
    {id: 6, name: "Keyboard", stock: 10},
]

// Find the first product with stock === 0
const firstOutOfStock = products.find(product => product.stock === 0)
console.log(firstOutOfStock)



const posts = [
    {id: 101, title: "Intro to JS"},
    {id: 102, title: "Advanced JS"},
    {id: 103, title: "JS Best Practices"},
    {id: 104, title: "Intro to Vuejs CDN"},
    {id: 105, title: "Advanced Vuejs"},
    {id: 106, title: "Vuejs Best Practices"},
]

const postIdToFind = Math.floor((Math.random() * 6) + 101); // from 101 to 6 number above

// Find index of a post by id
const postIndex = posts.findIndex(post => post.id === postIdToFind)
console.log(postIndex)







// 11. Write your own indexOf() polyfill for strings.

    // 11. Write your own indexOf() polyfill for strings.



