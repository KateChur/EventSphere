<template>
  <div class="footer">
    <div>
      <p class="logo no-phone"><Button text label="EventSphere"/></p>
    <div>
      <p class="social__text">Мы в социальных сетях:</p>
      <div class="social">
        <img class="social_icon" src="../assets/images/socials/soc-icon_telegram.png" alt="telegram">
        <img class="social_icon" src="../assets/images/socials/soc-icon_vk.png" alt="vk">
        <img class="social_icon" src="../assets/images/socials/soc-icon_tik-tok.png" alt="tik-tok">
        <img class="social_icon" src="../assets/images/socials/soc-icon_whatsapp.png" alt="whatsapp">
        <img class="social_icon" src="../assets/images/socials/soc-icon_youtube.png" alt="youtube">
      </div>
    </div>
    </div>
    <nav class="footer__navigation">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/" @click="scrollToTop">Наши мероприятия</RouterLink>
      <RouterLink to="/locations">Наши площадки </RouterLink>
      <RouterLink to="/about">О нас</RouterLink>
    </nav>
    <div class="subscribe">
      <Button label="Подписаться"/>
    </div>

  </div>

</template>

<script>
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Sidebar from "primevue/sidebar";

export default {
  components: {
    Password,
    InputText,
    Button,
    Dialog,
    Sidebar
  },
  methods: {
    scrollToTop() {
      this.$router.push('/');
      window.scrollTo({top: 740, behavior: 'smooth'});
    }

  }
}
</script>

<style scoped lang="scss">
  .footer {
    width: 100%;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: rgb(106, 39, 121);

    padding-bottom: 60px;
    @media screen and (max-width: 1100px){
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 8px;
    }
    @media screen and (max-width: 550px){
      margin-top: 30px;
      margin-bottom: 4px;
    }

  }
  .copyrights {
    width: 100vw;
    text-align: center;
    background-color: rgb(106, 39, 121);
    padding: 20px;
    color: #ffffff;
  }

  .social {
    display: flex;
    gap: 20px;
    .social_icon{
      width: 30px;
      height: auto;
    }
    &__text {
      margin-bottom: 20px;
    }
  }

  .footer__navigation{
    display: flex;
    align-items: flex-end;
    gap: 20px;
    @media screen and (max-width: 550px){
      white-space: nowrap;
      overflow: scroll;
    }
  }

  .subscribe{
    display: flex;
    align-items: flex-end
  }
  .no-phone{
    display: block;
    @media screen and (max-width: 550px){
      display: none;
    }
  }
</style>