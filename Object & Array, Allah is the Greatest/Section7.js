// 🔧 SECTION 7: BUILD MINI-APPS (APPLY EVERYTHING)




// 21. 📝 Todo List

    // Store todos in array of objects: { id, text, done }

    // Implement: add, toggle done, remove, list active





//     const todosList = [
//         {id: 1, text: "Read Al Quran", done: false},
//     ]

// // Function to add a new todo
// function addTodo(text) {
//     const newTodo = {
//         id: todosList.length ? todosList[todosList.length - 1].id + 1 : 1, 
//         text: text,
//         done: false
//     }
//     todosList.push(newTodo)
// }



// // Function to toggle 'done' status
// function toggleDone(id) {
//     const todo = todosList.find(todo => todo.id == id)
//     if (todo) {
//         todo.done = !todo.done
//     }
// }


// // Function to remove a todo 
// function removeTodo(id) {
//     const index = todosList.findIndex(todo => todo.id === id)
//     if (index !== -1) {
//         todosList.splice(index, 1)
//     }
// }


// // Function to list active todos (not done yet)
// function listActiveTodos() {
//     return todosList.filter(todo => !todo.done)
// }


// // Example usage:
// addTodo("Learn Javascript")
// addTodo("Exercice")
// toggleDone(1)
// removeTodo(2)
// console.log(listActiveTodos())






// DISPLAYING OUR CRD in HTML 


const todosListHTML = [

]

function renderTodos() {
    const ul = document.getElementById("todoList")
    ul.innerHTML = ""; // Clear existing list

    todosListHTML.forEach(todo => {

        const li = document.createElement('li')
        li.textContent = todo.text;
        li.style.textDecoration = todo.done ? "line-through" : "none" // Strikethrough if done
        li.onclick = () => toggleDoneHTML(todo.done) // Toggle done on click


        const removeButton = document.createElement('button')
        removeButton.textContent = "DELETE/Remove"
        removeButton.onclick = (event) => {
            event.stopPropagation() // Prevent triggering toggle
            removeTodo(todo.id)
        }

        li.appendChild(removeButton)
        ul.appendChild(li)

    })

}

    function addTodoListHTML() {
        const input = document.getElementById("todoInput")
        if (input.value.trim() === "") return; // Prevent empty todos

        const newTodoHTML = {
            id: todosListHTML.length ? todosListHTML[todosListHTML.length -1].id +1 : 1,
            text: input.value.trim(),
            done: false
        }

        todosListHTML.push(newTodoHTML)
        input.value = "" // Clear input
        renderTodos();
    }

    function toggleDoneHTML(id) {
        const todo = todosListHTML.find(todo => todo.id === id)
        if (todo) {
            todo.done = !todo.done
            renderTodos()
        }
    }


    function removeTodo(id) {
        const index = todosListHTML.findIndex(todo => todo.id === id)
        if (index !== -1) {
            todosListHTML.splice(index, 1)
            renderTodos()
        }
    }





// 22. 🛒 Shopping Cart

    // Cart items: { id, title, price, qty }

    // Implement: add, remove, update quantity, calculate total




const cartItems = [

    {id: 1, title: "Sample Item", price: 10.99, qty: 1},

]


function addItem(title, price, qty = 1) {
    const newItem = {
        id: cartItems.length ? cartItems[cartItems.length -1].id + 1: 1,
        title,
        price,
        qty
    }
    cartItems.push(newItem)
}

function removeItem(id) {
    const index = cartItems.findIndex(item => item.id ===id)
    if (index !== -1) {
        cartItems.splice(index, 1)
    }
}

function updateQuantity(id, newQty) {
    const item = cartItems.find(item => item.id === id)
    if (item && newQty > 0) {
        item.qty = newQty;
    }
}

function calculateTotal() {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0)
}


// Example usage
addItem("Laptop", 999.99, 1)
// addItem("Mouse", 49.99, 2)
// removeItem(1)
// updateQuantity(2, 3)
console.log("Cart Items:", cartItems)
console.log("Total Price:", calculateTotal())




// 23. 🔍 User Search & Filter

    // Live search through user names (partial match)

    // Filter by active status

    // Sort by name or registration date















// 24. 📊 Survey Analyzer

    // Input: Array of responses ["yes", "no", "yes", "maybe"]

    // Output: { yes: 2, no: 1, maybe: 1 }

