<template>
  <div class="login_wrapper">
    <h3>Авторизуйтесь, чтобы сделать заказ и получить информацию об аккаунте</h3>
    <div class="error" v-if="isError">
      <h2>Ошибка.</h2>
      <h4>Неверный логин или пароль</h4>
    </div>
    <form id="loginForm" @submit.prevent="submitForm">
      Введите логин
      <FloatLabel>
        <InputText v-model="username"  name="username" />
      </FloatLabel>
      Введите пароль
      <InputText v-model="password" type="password"  name="password" />
<!--      <Password name="password" :feedback="false" />-->
      <div>
        <Button type="submit">Войти</Button>
      </div>
    </form>
  </div>
</template>
<script>
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import axios from 'axios';
import {mapActions} from "vuex";

export default {
  components: {
    Password,
    InputText,
    Button
  },
  data() {
    return {
      username: '',
      password: '',
      isError: false,
    };
  },
  methods: {
    ...mapActions(['updateUserInfo']),
    async submitForm() {
      try {
        const formData = new FormData(document.getElementById('loginForm'));
        const response = await axios.post('http://localhost:8000/api/v1/login/', formData);
        console.log(response.data)
        if (response.data.first_name) {
          this.isError = false;
          await this.updateUserInfo(response.data)
          await this.$router.push('/');
        } else {
          this.isError = true;
        }
      } catch (error) {
        this.isError = true;
      }
    }
  }
};
</script>

<style scoped>
.login_wrapper{
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 80%;
  margin-left: 40px;
}
h3{
  color: rgb(106, 39, 121);

}
form {
  color: rgb(106, 39, 121);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.error {
  color: red;
}
</style>





