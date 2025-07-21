<script>

import Products from "./components/Products.vue"
import Ratings from "./components/Rating.vue";

export default {
  components:{
    Products,

    Ratings
    
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
        <Ratings rating="1"/>
        <Ratings rating="2"/>
        <Ratings rating="3"/>
        <Ratings rating="4"/>
        <Ratings rating="5"/>
      </div>
    </div>
</template>
