<template>
  <div class="pre-header">
    <div class="mobile">
      <h1 class="logo">EventSphere</h1>
    </div>
    <div class="pre-header__title" v-if="userInfo.first_name">{{userInfo.first_name}} {{ userInfo.last_name}}
      <Button icon="pi pi-user" @click="sidebar = true" />
    </div>
    <div class="pre-header__buttons"  v-else>
      <RouterLink to="/login"><Button outlined label="Войти" class="no-phone "/><Button icon="pi pi-sign-in" class="phone" severity="help" rounded aria-label="Search" /></RouterLink>

      <RouterLink to="/register"><Button label="Зарегистрироваться" class="no-phone" /><Button icon="pi pi-user-plus" class="phone" severity="help" rounded aria-label="Search" /></RouterLink>
    </div>
   </div>
  <div class="header">
    <div class="pc_visible">
      <p class="logo"><Button text label="EventSphere"/></p>
    </div>
    <nav class="header__navigation">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/" @click="scrollToTop">Наши мероприятия</RouterLink>
      <RouterLink to="/locations">Наши площадки </RouterLink>
      <RouterLink to="/about">О нас</RouterLink>
      <Button icon="pi pi-search" class="pc_visible" severity="help" rounded aria-label="Search" />
    </nav>
  </div>

  <Dialog v-model:visible="visible" modal header="Выйти?" :style="{ width: '40rem', padding: '0.5rem' }">
    <div>
      <h1>Вы уверены что хотите выйти?</h1>
      <div class="bts_modal">
        <Button type="button" label="Нет!" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Да" @click="logOut"></Button>
      </div>
    </div>
  </Dialog>

  <Sidebar v-model:visible="sidebar" header="Профиль" position="right">
    {{userInfo.first_name}} {{ userInfo.last_name}}
    <div class="sidebar">
     <div><Button @click="goTo" class="sidebar__btn" outlined label="Мой профиль" /></div>
      <div><Button @click="visible = true" class="sidebar__btn" outlined label="Выйти" /></div>
    </div>

  </Sidebar>


</template>

<script>
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dialog from 'primevue/dialog';
import Sidebar from 'primevue/sidebar';
import {mapActions} from "vuex";

export default {
  components: {
    Password,
    InputText,
    Button,
    Dialog,
    Sidebar
  },
  data() {
    return {
      // login: "",
      visible: false,
      sidebar: false,
    };
  },
  updated() {
    // this.login = this.getUserInfo.login
  },
  methods:{
    ...mapActions(['updateUserInfo']),
    scrollToTop() {
      this.$router.push('/');
      window.scrollTo({ top: 740, behavior: 'smooth' });
    },
    logOut() {
      this.updateUserInfo({})
      this.visible = false;
      this.sidebar = false;
    },
    goTo(){
      this.sidebar = false
      this.$router.push('/user');

    }
  },
  computed: {
    userInfo(){
      return this.$store.state.userInfo
    }
  },
}

</script>

<style scoped lang="scss">
  .pre-header{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
    &__title{
      color: rgb(106, 39, 121);
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    &__buttons{
      width: 100%;
      display: flex;
      justify-content: flex-end;
      gap: 10px;

    }
  }
  .header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1100px){
      justify-content: center;
      margin-bottom: 20px;
    }
    &__navigation {
      display: flex;
      align-items: center;
      gap: 60px;
      @media screen and (max-width: 800px){
        gap: 40px;
      }
      @media screen and (max-width: 720px){
        gap: 30px;
      }
      @media screen and (max-width: 600px){
        gap: 30px;
      }
      @media screen and (max-width: 550px){
        gap: 15px;
      }
      @media screen and (max-width: 460px){
        gap: 20px;
        overflow: scroll;
        white-space: nowrap;
        padding: 10px 0;
      }
    }
  }
  .logo{
    font-size: 20px;
    @media screen and (max-width: 1100px){
      margin: 0;
    }
  }
  a{
  }
  .bts_modal{
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }
  .sidebar{
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__btn{
      width: 100%;
    }
  }

  .mobile{
    display: none;
    @media screen and (max-width: 1100px){
      display: flex;
      align-items: center
    }
  }
  .pc_visible{
    display: block;
    @media screen and (max-width: 1100px){
      display: none;
    }
  }
  .phone{
    display: none;
    @media screen and (max-width: 550px){
      display: block;
    }
  }
  .no-phone{
    display: block;
    @media screen and (max-width: 550px){
      display: none;
    }
  }
</style>