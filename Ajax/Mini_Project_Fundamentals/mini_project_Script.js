// 🛠️ Mini Project: User Manager SPA (Single Page App)

// ✨ Features:
// Fetch and display a list of users.

// Add new user (POST).

// Edit user (PUT).

// Delete user (DELETE).

// All with async/await, fetch(), and JSON.



// 🗂️ Tech Stack:
// Plain HTML/CSS/JS

// JSONPlaceholder or Reqres (fake APIs)

// Organized code with modular async functions

// 🧩 Components:

// 1. getUsers() – Display list

async function getUsers() {
    try {

        const res = await fetch("https://reqres.in/api/users?page=1")
        if(!res.ok) throw new Error("Cannot fetch users")
        const { data } = await  res.json()
        renderUsers(data)

    } catch (error) {   

        console.error(error.message)

    }
}



// 2. addUser() – Add via form (POST)


async function addUser(user) {
     try {

        const res = await fetch("https://reqres.in/api/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })

        if (!res.ok) throw new Error('Add user failed')
        const data = await res.json()
        alert("User added" + data.name)
        getUsers() // refresh list

     } catch (err) {

        console.err(err.message)

     }
}



// 3. updateUser(id, user) – Update user


async function updateUser(id, user) {
    try {

        const res = await fetch("https://reqres.in/api/users/${id}", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })

        if (!res.ok) throw new Error("Update failed")
        const data = await res.json()
        alert(`Update ${data.name}`)
        getUsers()
    } catch (err) {
        console.err(err.message)
    }
}



// 4. deleteUser(id) – Delete user


async function deleteUser(id) {
    try {

        const res = await fetch("https://reqres.in/api/users/${id}", {
            method: 'DELETE'
        })

        if (!res.ok) throw new Error("Delete failed")
        alert("User deleted")
        getUsers()

    } catch (err) {
        console.err(err.message)
    }
}