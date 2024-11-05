<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer1 from '../components/Footer.vue'
import inicioTop from '@/components/inicioTop.vue'
</script>

<template>
  <NavBar></NavBar>
  <inicioTop></inicioTop>
  <Footer1></Footer1>
</template>

<style scoped>
#nav {
  top: 0%;
  width: 100vw;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 20px;
}

.row {
  display: flex;
  margin-bottom: 10px;
}

.col {
  flex: 1;
  padding: 20px;
  margin-right: 10px;
  text-align: center;
}

.col:last-child {
  margin-right: 0;
}
</style>
