<template>
  <div class="home">
    <Banner v-on:getRestaurant = "getRestaurant"/> <!-- v-on:getRestaurant emit getRestaruant from Banner-->
    <CardItem :restaurants="list"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import CardItem from '@/components/CardItem.vue'
import axios from 'axios'

export default {
  name: 'Home',
  data(){ // setting state/variable that needed to use 
    return{
      list:null
    }
  },
  components: { // setting component 
    Banner,
    CardItem,
  },
  created(){ // lifecycle Created
    this.getRestaurant();
  },
  methods:{ // method/function list
    getRestaurant(searchQuery =""){
      var query=""
      if(searchQuery != ""){
        query += `q=${searchQuery}`
      }
      axios({
        method:'get',
        url:`https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city${query !=""?"&"+query: ""}`,
        headers:{"user-key":"7ade75f20bdf5ebf7067448825a21b2e"}
      })
      .then(res =>{
          console.log(res.data.restaurants)
          this.list = res.data.restaurants;
      })
      .catch(err=>{
          console.log(err)
      })
    }
  }
}
</script>
