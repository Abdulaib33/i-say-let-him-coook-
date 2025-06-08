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
            <img src="${user.avatar}" alt="">
        `;
        list.appendChild(div)
    })

}






// Add a New User (POST)


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