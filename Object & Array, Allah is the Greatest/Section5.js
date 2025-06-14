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





// 16. Use rest/spread in objects:

    // Exclude a property: const { password, ...rest } = user

    // Merge default config and user config:

    // const defaultConfig = { theme: 'dark', lang: 'en' };

    // const userConfig = { lang: 'fr' };

        // Result: { theme: 'dark', lang: 'fr' }



const user1 = {
    username: "JohnDoe",
    email: "john@example.com",
    password: "secret123"
}

const {password, ...rest} = user1


const defaultConfig = {theme: "dark", lang: "en"}
const userConfig = {lang: "fr"}
const mergedConfig = { ...defaultConfig, ...userConfig}

console.log(rest) // {username: 'JohnDoe', email: 'john@example.com'}
console.log(mergedConfig) // {theme: 'dark', lang: 'fr'}







// 17. Optional chaining:

    // Access user?.profile?.email

    // Avoid errors if any layer is undefined.



const user2 = {
    profile: {
        email: "john@example.com"
    }
}


console.log(user2.profile.email) // without optional chaining
console.log(user2?.profile?.email) // with optional chaining


console.log(user2?.settings?.theme) // with optional chaining // undefined
console.log(user2.settings.theme) // without optional chaining // a lot of errors