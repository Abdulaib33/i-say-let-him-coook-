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
        name: "Tome",
        location: {
            city: "NYC",
            zip: "10001"
        }
    }
}

const {profile: {name, location: {city, zip}}} = user
console.log(name)
console.log(city)
console.log(zip)