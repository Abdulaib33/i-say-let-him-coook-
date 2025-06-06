// 📘 Part 2: Advanced HTTP Methods + Axios
// 🔹 Exercise 4: PUT (update data)


async function updateUser() {
    try {

        const response = await fetch("https://reqres.in/api/users/2", {
            method: 'PUT',
            headers: { 'Content-Type': 'applicatoin/json'},
            body: JSON.stringify({ name: 'Alice', job: 'Senior Developper'})
        })

        if (!response.ok) throw new Error("Update failed")
        const data = await response.json()
        console.log("User updated", data)

    } catch (error) {   
        console.error('Error:', error.message)
    }
}

updateUser()








// 🔹 Exercise 5: DELETE

async function deleteUser() {
    try {

        const response = await fetch("https://reqres.in/api/users/2", {
            method: 'DELETE'
        })

        if (!response.ok) throw new Error("Delete failed")
        console.log('User deleted (status):', response.status)
    } catch (error) {
        console.error('Error', error.message)
    }
}

deleteUser()











// 🔹 Exercise 6: Do the same with Axios
import axios from 'axios';

async function getUser() {
    try {

        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/1")
        console.log(data)

    } catch (error) {
        console.error('Axios error:', error.message)
    }
}

getUser()