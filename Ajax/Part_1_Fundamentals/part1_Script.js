// 📘 Part 1: Fundamentals (AJAX Basics with fetch + async/await)

// 🔹 Exercise 1: Basic GET request
// Goal: Fetch data from a public API (like JSONPlaceholder) and display it.


async function loadPost() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        if (!response.ok) throw new Error("Network response was not ok")
        const post = await response.json()
        console.log(post)

    } catch (error) {

        console.error("Fetch error", error.message)

    }
}


loadPost()







// 🔹 Exercise 2: POST data
// Goal: Send JSON to a server (simulated or real API like reqres.in).

async function createUser() {
    try {

        const response = await fetch("https://reqres.in/api/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ name: 'Alice', job: 'Developper'})
        })
        
        if (!response.ok) throw new Error("Failed to create user")
        const data = await response.json()
        console.log('User Created', data)

    } catch (error) {   

        console.error('Error', error.message)

    }
}

createUser()










// 🔹 Exercise 3: Handle 404 / bad responses
// Goal: Show how to catch and handle failed responses cleanly.

async function fetchNonExistent() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/99999")
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json() 
        console.log(data)

    } catch (error) {
        console.error("Handled error", error.message)
    }   
}

fetchNonExistent()