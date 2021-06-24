<template>
  <view>
    
  </view>
</template>

<script>
  import {getMovieDetailApi} from '../../apis/movies.js'
  export default {
    data() {
      return {
        
      }
    },
    async onLoad(options){
      console.log('options',options)
      const data = await getMovieDetailApi('5b432b436b6a9c21ec00db55')
      console.log('data',data)
    },
    methods: {
      
    }
  }
</script>

<style>

</style>
