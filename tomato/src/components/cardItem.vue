<template>
    <div class="container" >
        <div class="card" @click="toDetail(rest.restaurant.R.res_id)" :key='idx' v-for="(rest,idx) in restaurants">
            <img :src="rest.restaurant.featured_image" style="width:100%; height:100px;"/>
            <div>
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
        this.$router.push({name:'Detail',query:{resId:resId}})
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
  cursor:pointer;
}
.container {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>