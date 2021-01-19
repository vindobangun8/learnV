<template>
    <div>
        <section v-if="this.restaurant" style="display:flex; justify-content:center;">
            <img :src="this.restaurant.featured_image" style="width:50%;height:300px;"/>
        </section>
        <section v-if="this.restaurant" style="display:flex; justify-content:center; ">
            <section style="width:25%;" > 
                <h1>{{this.restaurant.name}}</h1>
                <h5>{{`${this.restaurant.establishment[0]} - ${this.restaurant.cuisines}`}}</h5>
                <h6>{{`${this.restaurant.location.locality}`}}</h6>
                <h6>{{`Open from ${this.restaurant.timings}`}}</h6>
            </section>
            <section style="width:25%; margin-top:10px; display:flex; justify-content:flex-end;" > 
                <h5>Rating: {{this.restaurant.user_rating.aggregate_rating}}</h5>
            </section>
            
        </section>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Detail',
    data:function(){
        return{
            restaurant:null
        }
    },
    mounted(){
        this.getRestaurantDetail(this.$route.query.resId)
    },
    methods:{
        getRestaurantDetail(id){
            axios({
                method:'get',
                url:`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`,
                headers:{"user-key":"7ade75f20bdf5ebf7067448825a21b2e"}
            })
            .then(res=>{
                console.log(res.data);
                this.restaurant = res.data;

            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>