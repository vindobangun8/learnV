<template>
  <div class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/food1.jpg" class="d-block w-100" alt="...">
      
    </div>
    <div class="centered">
        <h1 style="text-align:center;">Tomato</h1>
        <h2>Finding your Favourite Restaurant</h2>
        <div>
        <input v-model="searchQuery" placeholder="find a restaurant" style="width:100%;">
        <button v-on:click="$emit('getRestaurant',searchQuery)">Search</button>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    name:"Carousel",
    data:function(){
      return{
        searchQuery:null
      }
    }
}
</script>

<style>
.centered {
  position: absolute;
  top: 50%;
  color:white;
  left: 50%;
  transform: translate(-50%, -50%);
}

.carousel-item {
  height: 50vh;
  min-height: 350px;
}
</style>