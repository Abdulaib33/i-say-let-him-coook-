//  🔧 Project Plan: "User Manager SPA"
// We'll use HTML + JavaScript (only fetch, async/await) to:

// Fetch and display users (GET)

// Add a user (POST)

// Edit a user (PUT)

// Delete a user (DELETE)

// 📡 API: We’ll use https://reqres.in — a free fake API that supports all these operations.



document.addEventListener('DOMContentLoaded', () => {
    loadUsers()
})

const API_KEY = 'reqres-free-v1'

async function loadUsers() {
    try {

        const response = await fetch("https://reqres.in/api/users?page=2", {
            headers: {
                'x-api-key': API_KEY,
                'Accept': 'application/json'
            }
        })
        if (!response.ok) throw new Error('Failed to fetch users')

        const data = await response.json()
        displayUsers(data.data)

    } catch (error) {

        console.error('Error loading users', error.message)
        document.getElementById('user-list').textContent = "Error loading users."

    }
}


function displayUsers(users) {

    const list = document.getElementById('user-list')
    list.innerHTML = ""; // Clear previous content

    users.forEach(user => {
        const div = document.createElement('div')
        div.className = 'user'
        div.innerHTML = `
            <strong>${user.first_name} ${user.last_name}</strong> (${user.email})

            
            <button onclick="editUser(${user.id}, '${user.first_name}', '${user.last_name}')">Edit</button>

            <button onclick="deleteUser(${user.id})">Delete</button>
            <img src="${user.avatar}" alt="">
        `; // 🛑 Important: we pass first_name and last_name to editUser() so we can prefill the prompt.
        list.appendChild(div)
    })

}






// Add a New User (POST)

/*

document.getElementById('add-user-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // prevent page reload
})

const nameInput = document.getElementById('name')
const jobInput = document.getElementById('job')
const name1 = nameInput.value.trim()
const job = jobInput.value.trim()


if (!name1 || !job) return alert('Please enter both name and job');


try {

    const response = await fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'}, 
        body: JSON.stringify({name1, job})
    })

    if (!response.ok) throw new Error('Failed to add user')

    const data = await response.json()
    alert(`User added: ${data.name}, ${data.job}`)

    // Optionally clear input fields
    nameInput.value = "";
    jobInput.value = "";


    // Reload user list
    loadUsers();
} catch (error) {

    console.error('Error adding user:', error.message);
    alert('Something went wrong when adding user.')

}
    */











// Delete a User (DELETE)


async function deleteUser(id) {

    if (!confirm(`Are you sure you want to delete user #${id}?`)) return;

    try {

        const response = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) throw new Error("Failed to delete user")

        alert(`User #${id} deleted`)
        loadUsers(); // Refresh the list

    } catch (error) {

        console.error('Error deleting user:', error.message)
        alert('Something went wrong while deleting the user.')

    }

}








//  Update a User (PUT)


async function editUser(id, currentFirst, currenLast) {

    const newName = prompt("Enter new full name:", `${currentFirst} ${currenLast}`)
    const newJob = prompt("Enter new job title:", 'Developper')

    if (!newName || !newJob) return alert('Update cancelled')

    try {

        const response = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({name: newName, job: newJob})
        })

        if (!response.ok) throw new Error('Failed to update user')


        const data = await response.json()
        alert(`User updated: \nName: ${data.name}\nJob: ${data.job}`)
        loadUsers(); // Reload list
    } catch (error) {

        console.error('Error updating user:', error.message)
        alert('Something went wrong while updating user.')

    }

}