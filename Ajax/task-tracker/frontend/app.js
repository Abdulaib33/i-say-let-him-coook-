const { createApp } = Vue;


createApp({
    data() {
        return {
            tasks: [],
            form: {title: '', description: ''},
            error: ''
        }
    },

    methods: {
        async fetchTasks() {
            try {

                const res = await fetch('../backend/api.php/tasks')
                if (!res.ok) throw new Error('Failed to fetch tasks')
                this.tasks = await res.json()

            } catch (err) {
                this.error = err.message
            }
        },

        async addTask() {
            try {

                const res = await fetch('../backend/api.php/tasks', {
                    method: 'POST',
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify(this.form)
                })

                if (!res.ok) throw new Error('Failed to add task')
                await this.fetchTasks()
                this.form.title = ''
                this.form.description = ''

            } catch (err) {
                this.error = err.message
            }
        },

        async deleteTask(id) {
            if (!confirm('Delete this task')) return;
            try {

                const res = await fetch(`../backend/api.php/tasks/${id}`, {
                    method: 'DELETE'
                })
                if (!res.ok) throw new Error('Failed to delete task')
                await this.fetchTasks()
            } catch (err) {
                this.error = err.message
            }
        },

        async editTask(task) {
            const newTitle = prompt('Edit title:', task.title)
            const newDesc = prompt('Edit description:', task.description)
            if (!newTitle || !newDesc) return;

            try {

                const res = await fetch(`../backend/api.php/tasks/${task.id}`, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({title: newTitle, description: newDesc})
                })
                if (!res.ok) throw new Error('Failed to update task')
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