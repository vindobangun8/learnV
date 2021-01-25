<template>
    <div class="container" >
        <div class="card"  :key='idx' v-for="(rest,idx) in restaurants">
            <div>
                <img :src="rest.restaurant.featured_image" style="width:100%; height:100px;"/>
                <img class ="favourite" v-if="$store.state.favouriteRest.filter(el => el.id != rest.restaurant.id)" @click="addFavourite(rest.restaurant)" src="@/assets/heart.png" style="width:20px;height:20px;"/>
                <img class ="favourite" v-if="$store.state.favouriteRest.find(el => el.id == rest.restaurant.id)" @click="removeFavouite(rest.restaurant)" src="@/assets/dislike.png" style="width:20px;height:20px;"/>
                <!-- <img class ="favourite" v-if="$store.state.favouriteRest.filter(el => el.id != rest.restaurant.id)" @click="addFavourite(rest.restaurant)" src="@/assets/heart.png" style="width:20px;height:20px;"/> -->
            </div>
            <div @click="toDetail(rest.restaurant.R.res_id)" style="cursor:pointer; width:100%;">
                <h4><strong>{{rest.restaurant.name}}</strong></h4>
                <h6>{{rest.restaurant.location.locality}}</h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:'CardItem',
props:['restaurants'],
methods:{
    toDetail(resId){
        this.$router.push({name:'Detail',params:{resId:resId}})
    },
    addFavourite(restaurant){
        this.$store.dispatch('addFavourite',restaurant);
        console.log(this.$store.state.favouriteRest)
    },
    removeFavouite(restaurant){
        this.$store.dispatch('removeFavourite',restaurant)
        console.log(this.$store.state.favouriteRest)
    }
   
}
}
</script>

<style>
.card {
  margin: 20px;
  height:200px;
  width: 250px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
}
.container {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.favourite {
  position: absolute;
  top: 8px;
  right: 16px;
  cursor: pointer;
}
</style>