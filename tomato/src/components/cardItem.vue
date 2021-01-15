<template>
    <div style=" display:flex; justify-content:center">
        <div class="container">
            <div  :key='idx' v-for="(rest,idx) in restaurants">
                <div class="card">
                    <router-link tag="img" :src="rest.restaurant.featured_image" :to="{name:'Detail',params:{resId:rest.restaurant.R.res_id}}" style="width:100%; height:100px; cursor:pointer;">
                    <!-- <img :src="rest.restaurant.featured_image" style="width:100%; height:100px;"/> -->
                    </router-link>
                    <div class="card-body">
                        <h4><strong>{{rest.restaurant.name}}</strong></h4>
                        <h6>{{rest.restaurant.location.locality}}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:'CardItem',
props:['restaurants']
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
</style>