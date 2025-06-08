const { createApp } = Vue;

createApp({

    data() {

        return {
            users: [],
            form: {name: '', job: ''},
            error: ''
        }

    },

    methods: {
        async fetchUsers() {
            try {

                const res = await fetch('../backend/api.php/users')
                if (!res.ok) throw new Error('Failed to fetch users')
                this.users = await res.json()

            } catch (err) {
                this.error = err.message
            }
        },

        async addUser() {
            try {

                const res = await fetch('../backend/api.php/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(this.form)
                })
                if (!res.ok) throw new Error('Failed to add user')
                await this.fetchUsers()
                this.form.name = '';
                this.form.job = '';

            } catch (err) {

                this.error = err.message

            }

        },

        async deleteUser(id) {
            if (!confirm('Delete this user?')) return;
            try {

                const res = await fetch(`../backend/api.php/users/${id}`, {
                    method: 'DELETE'
                })
                if (!res.ok) throw new Error('Failed to delete user')
                await this.fetchUsers()
            } catch (err) {
                this.error = err.message
            }
        },

        async editUser(user) {
            const newName = prompt('Edit name:', user.name)
            const newJob = prompt('Edit job:', user.job)

            if (!newName || !newJob) return;

            try {

                const res = await fetch(`../backend/api.php/users/${user.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({name: newName, job: newJob})
                })
                if (!res.ok) throw new Error('Failed to update user')
                await this.fetchUsers()
            } catch (err) {
                this.error = err.message
            }

        }
    },
    mounted() {
        this.fetchUsers()
    }

}).mount('#app')