const { createApp } = Vue

const BASE_URL = '/one-shot-eafc/JAVASCRIPT/Ajax/task-tracker/backend/api.php/tasks'

createApp({
    data() {
        return {
            tasks: [],
            form: { title: '' },
            error: ''
        }
    },
    methods: {
        async fetchTasks() {
            try {
                const res = await fetch(BASE_URL)
                if (!res.ok) throw new Error('Fetch failed')
                this.tasks = await res.json()
            } catch (err) {
                this.error = err.message
            }
        },
        async addTask() {
            try {
                const res = await fetch(BASE_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.form)
                })
                if (!res.ok) throw new Error('Add failed')
                await this.fetchTasks()
                this.form.title = ''
            } catch (err) {
                this.error = err.message
            }
        },
        async deleteTask(id) {
            if (!confirm('Delete this task?')) return
            try {
                const res = await fetch(`${BASE_URL}/${id}`, {
                    method: 'DELETE'
                })
                if (!res.ok) throw new Error('Delete failed')
                await this.fetchTasks()
            } catch (err) {
                this.error = err.message
            }
        },
        async editTask(task) {
            const newTitle = prompt('Edit title:', task.title)
            if (!newTitle) return
            try {
                const res = await fetch(`${BASE_URL}/${task.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title: newTitle })
                })
                if (!res.ok) throw new Error('Update failed')
                await this.fetchTasks()
            } catch (err) {
                this.error = err.message
            }
        }
    },
    mounted() {
        this.fetchTasks()
    }
}).mount('#app')
