<template>
<div>
    <div style="display:flex; justify-content:center;">
        <router-link to="/">Back To Home </router-link>
    </div>
    <FavouriteItem />
    </div>
</template>

<script>
import FavouriteItem from '@/components/FavouriteItem.vue'
export default {
    name:"Favourite",
    components:{
        FavouriteItem
    }
}
</script>

<style>

</style>