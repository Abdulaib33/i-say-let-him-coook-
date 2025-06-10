const { createApp } = Vue

const BASE_URL = '/one-shot-eafc/JAVASCRIPT/Ajax/book_haven/backend/api.php/books'


createApp({
    data() {
        return {
            books: [],
            form: {title: '', author: ''}
        }
    },

    methods: {
        async fetchBooks() {
            try {

                const res = await fetch(BASE_URL)
                if (!res.ok) throw new Error('Failed to fetch books')
                this.books = await res.json()

            } catch (err) {
                this.error = err.message
            }
        },

        async addBook() {
            try{

                const res = await fetch(BASE_URL, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.form)
                })

                if (!res.ok) throw new Error('Failed to add book')
                this.form.title = ''
                this.form.author = ''
                await this.fetchBooks()

            } catch (err) {

                this.error = err.message

            }
        },

        async deleteBook(id) {

            if (!confirm('Delete this book?')) return
            try {

                const res = await fetch(`${BASE_URL}/${id}`, {
                    method: 'DELETE'
                })
                
                if (!res.ok) throw new Error('Failed to delete book')
                await this.fetchBooks()

            } catch (err) {

                this.error = err.message

            }
        },

        async editBook(book) {

            const newTitle = prompt('Edit title', book.title)
            const newAuthor = prompt('Edit author', book.author)

            if (!newTitle || !newAuthor) return

            try {

                const res = await fetch(`${BASE_URL}/${book.id}`, {
                    method: 'PUT',
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify({title: newTitle, author: newAuthor})
                })

                if (!res.ok) throw new Error('Failed to edit book')
                await this.fetchBooks()

            } catch (err) {

                this.error = err.message

            }
        }
    },
    
    mounted() {
        this.fetchBooks()
    }

}).mount('#app')