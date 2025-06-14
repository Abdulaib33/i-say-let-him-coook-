// 🧬 SECTION 6: ARRAYS OF OBJECTS

// 18. CRUD operations:


    // Add a new user to array of users.

    // Update a user’s email by id.

    // Remove a user by id.



let users = [ // 2. That new filtered array gets saved back to users using users = ....
    {id: 1, name: "Alice", email: "alice@example.com"},
    {id: 2, name: "Bob", email: "bob@example.com"},
    {id: 3, name: "John", email: "john@example.com"},
    {id: 4, name: "Abdoulaye", email: "Abdoulaye@example.com"},
    {id: 5, name: "Roberto", email: "roberto@example.com"},
    {id: 6, name: "Coucou", email: "coucou@example.com"},
]


function renderUsers() {
    const ul = document.getElementById("userList")
    ul.innerHTML = ""; // Clear existing list

    users.forEach(user => {
        const li = document.createElement("li")
        li.textContent = `${user.name} (${user.email})`

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.onclick = () => deleteUser(user.id)

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        editBtn.onclick = () => editUser(user.id)

        li.appendChild(deleteBtn)
        li.appendChild(editBtn)
        ul.appendChild(li)

    })
}



function deleteUser(id) {
    users = users.filter(user => user.id !== id)  //1. when you use .filter() in deleteUser(), it creates a new array without the deleted user.
    console.log(users)
    renderUsers()
    
}

function editUser(id) {
    const user = users.find(user => user.id === id) // editUser() uses .find() to look only inside the current version of users (which may be filtered).
    console.log(user)
    if (user) {
        const newEmail = prompt(`Edit email for ${user.name}`, user.email)
        console.log(newEmail)
        if (newEmail) {
            user.email = newEmail // If it finds a match, it updates the email—it doesn’t exclude, delete, or skip anything.
            renderUsers() // Then it calls renderUsers() again to show the updated info.
        }
    }
}

// Initial render
renderUsers() // 2. That new filtered array gets saved back to users using users = ....
// Then renderUsers() runs, and since users was updated, it shows the new version, not the original list.






// 19. Sorting challenge:
    // const products = [

    // { name: 'A', price: 30 },

    // { name: 'B', price: 10 },

    // ];

    // Sort ascending and descending by price.



const products = [
    {name: "A", price: 30},
    {name: "B", price: 10}
]

const ascending = products.sort()

console.log(ascending)

const descending = products.sort()
descending.reverse()

console.log(descending)




// 20. Grouping with reduce:

    // Group people by department

        // const employees = [
        // { name: 'Tom', dept: 'HR' },
        // { name: 'Ana', dept: 'IT' },
        // { name: 'Zoe', dept: 'HR' }
        // ];

    // Result: { HR: [...], IT: [...] }




const employees = [
    {name: "Tom", dept: 'HR'},
    {name: "Azna", dept: "IT"},
    {name: "Zoe", dept: "HR"}
]



const grouped = employees.reduce((acc, curr) => {

    if (!acc[curr.dept]) {
        acc[curr.dept] = []
    }

    acc[curr.dept].push(curr)
    return acc;

}, {})

console.log(grouped)