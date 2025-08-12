<script>

import Products from "./components/Products.vue"
import initialRating from "./components/Rating.vue";

export default {
  components:{
    Products,

    initialRating
    
  },
  data() {
    return{
      isValid: true
    }
  }
}

</script>


<template>
    <div>
      <Products />
      <button type="button" class="btn btn-danger" v-bind:disabled="!isValid">Danger</button>

      <!-- Rating Component -->
      <div>
        <Ratings initialRating="1"/>
        <Ratings initialRating="2"/>
        <Ratings initialRating="3"/>
        <Ratings initialRating="4"/>
        <Ratings initialRating="5"/>
      </div>
    </div>
</template>
