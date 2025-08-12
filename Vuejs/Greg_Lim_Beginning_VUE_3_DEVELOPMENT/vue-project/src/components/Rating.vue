<script>
export default{
    props: ['initialRating'],
    data(){
        return{
            // rating only uses this.initialRating as the initial vlaue;
            // it is disconnected from future prop updates.
            rating: this.initialRating
        }
    }
}
</script>

<template>
    <div>
        <h1>Rating: {{ rating }}</h1>
            <i v-if="rating >=1" class="bi bi-star-fill"></i>
            <i v-else class="bi bi-star"></i>
            <i v-if="rating >=2" class="bi bi-star-fill"></i>
            <i v-else class="bi bi-star"></i>
            <i v-if="rating >=3" class="bi bi-star-fill"></i>
            <i v-else class="bi bi-star"></i>
            <i v-if="rating >=4" class="bi bi-star-fill"></i>
            <i v-else class="bi bi-star"></i>
            <i v-if="rating >=5" class="bi bi-star-fill"></i>
            <i v-else class="bi bi-star"></i>
    </div>
</template> 