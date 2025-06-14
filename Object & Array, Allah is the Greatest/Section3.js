// 9. Use some() and every():
    // Check if any number is negative in [-5, 2, 10]

    // Check if all users are isActive: true




const nums = [-5, 2, 10]

const hasNegative = nums.some(num => num < 0)
console.log(hasNegative)





const user = [
    {   
        name: "Abdoulaye",
        age: 22,
        isActive: true
    }
    ]

const userActive = user.every(user => user.isActive)

console.log(userActive)