<template>
  <div class="containerSearch" >
      <img src="@/assets/food1.jpg" class="img-fluid" alt="..." style="width:100%; max-height:400px;" >
      <div class="centered">
        <div style="display:flex; flex-direction:row; justify-content:center;">
          <img src="@/assets/tomato.png" style="width:50px; height:50px;">
          <h1 style="text-align:center;">Tomato</h1>
        </div>
        <h2>Finding your Favourite Restaurant</h2>
        <div style="display:flex; flex-direction:row;">
          <input v-model="searchQuery" placeholder="find a restaurant" style="width:100%;">
          <button v-on:click="$emit('getRestaurant',searchQuery)" class="btn btn-outline-danger"  style="margin-left:10px;">Search</button>
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

<style >
.centered {
  position: absolute;
  top: 50%;
  color:white;
  left: 50%;
  transform: translate(-50%, -50%);
}
.containerSearch {
  position: relative;
  text-align: center;
  color: white;
}
</style>