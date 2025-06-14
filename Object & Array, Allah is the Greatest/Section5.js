// 🔄 SECTION 5: ADVANCED PATTERNS
// 15. Destructure deeply nested object:

// const user = {

//     profile: {

//     name: 'Tom',

//     location: {

//         city: 'NYC',

//         zip: '10001'

//         }

//     }

// };

    // Extract: name, city, zip using destructuring.


const user = {
    profile: {
        name: ["Tome", "Abdoulaye"],
        location: {
            city: ["NYC", "Liège"],
            zip: ["10001", "4000"]
        }
    }
}

const {profile: {name, location: {city, zip}}} = user
console.log(name)
console.log(city)
console.log(zip)