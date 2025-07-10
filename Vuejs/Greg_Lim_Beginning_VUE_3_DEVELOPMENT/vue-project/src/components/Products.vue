<script>

    export default{
        data() {
            return{
                username: "",
                category: "Books",

                products:[
                    {id: 1, name: 'airpods'},
                    {id: 2, name: 'kindle'},
                    {id: 3, name: 'keyboard'}
                ]
            }
        }
    }

</script>


<template>

    <div>
        <h1>Products: {{ category }} by {{ username }}</h1>
        <!-- <h1>{{ category + ' by ' + username }}</h1> <br> -->
        <h1>{{ username ? username : 'no username' }}</h1> <!-- if username, display the username or else display 'no username'-->


        <div v-for="product in products" :key="product.id">

            <h3>{{ product.id }}: {{ product.name }}</h3>

        </div>
    </div>

</template>


<style>
    
</style>