<template>
  <div class="home">
    <Carousel msg="test"/>
    <div>coba</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/carousel.vue'

export default {
  name: 'Home',
  components: {
    Carousel
  }
}
</script>
