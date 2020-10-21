<template>
  <div id="app">
    <h2>Scroll With Animate</h2>
    <div class="box">
      <div class="item" v-scroll-animate="[item]" :delay="(index-(Math.floor(index/3)*3))/2"  v-for="(item, index) in animateList" :key="index" ></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      animateList:['animate__backInDown','animate__backInLeft','animate__backInRight','animate__backInUp','animate__bounceIn','animate__bounceInDown','animate__bounceInLeft','animate__bounceInRight','animate__bounceInUp','animate__fadeIn','animate__fadeInDown','animate__fadeInDownBig','animate__fadeInLeft','animate__fadeInLeftBig','animate__fadeInRight','animate__fadeInRightBig','animate__fadeInUp','animate__fadeInUpBig','animate__fadeInTopLeft','animate__fadeInTopRight','animate__fadeInBottomLeft','animate__fadeInBottomRight','animate__flipInX','animate__flipInY','animate__lightSpeedInRight','animate__lightSpeedInLeft','animate__rotateIn','animate__rotateInDownLeft','animate__rotateInDownRight'],
    }
  },
methods: {

}
}
</script>

<style>
#app {
  width: 1200px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;

}
.box{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
h2{
  text-align: center;
  color:#2c3e50;
  font-size: 48px;
}
.item{
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #2c3e50;
  margin-bottom:50px;
}

</style>
