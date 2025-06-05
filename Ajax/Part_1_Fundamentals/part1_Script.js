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