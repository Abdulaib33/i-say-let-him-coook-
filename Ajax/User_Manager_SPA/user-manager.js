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
            <button onclick="deleteUser(${user.id})">Delete</button>
        `
        list.appendChild(div)
    })

}