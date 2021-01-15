<template>
  <div class="home">
    <Carousel v-on:getRestaurant = "getRestaurant"/>
    <CardItem :restaurants="list"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/carousel.vue'
import CardItem from '@/components/cardItem.vue'
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return{
      list:null
    }
  },
  components: {
    Carousel,
    CardItem
  },
  created(){
    this.getRestaurant();
  },
  methods:{
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
