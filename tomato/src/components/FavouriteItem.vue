<template>
    <div class="container" >
        <div class="card"  :key='idx' v-for="(rest,idx) in $store.state.favouriteRest">
            <div>
                <img :src="rest.featured_image" style="width:100%; height:100px;"/>
                <img class ="favourite" @click="removeFavouite(rest)" src="@/assets/dislike.png" style="width:20px;height:20px;"/>
            </div>
            <div  style="cursor:pointer; width:100%;">
                <h4><strong>{{rest.name}}</strong></h4>
                <h6>{{rest.location.locality}}</h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:'FavouriteItem',
methods:{

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