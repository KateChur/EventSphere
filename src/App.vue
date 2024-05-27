<template>
  <div class="wrapper" ref="page">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
  <div class="copyrights">© Все права защищены. EventSphere 2024</div>
</template>

<script setup>

import MainPage from "@/pages/MainPage.vue";
import Header from "@/components/Header.vue";
import Button from 'primevue/button';
import Footer from "@/components/Footer.vue";
</script>



<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 120px;
    align-items: center;
    @media screen and (max-width: 1100px){
      margin: 0 60px;
    }
    @media screen and (max-width: 600px){
      margin: 0 10px;
    }
  }

  main {
    width: 100%;

  }
  .copyrights {
    width: 100%;
    text-align: center;
    background-color: rgb(106, 39, 121);
    padding: 20px;
    color: #ffffff;
  }
</style>
