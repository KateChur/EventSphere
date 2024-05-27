<template>
  <div class="login_wrapper">
    <h3>Зарегистрируйтесь, чтобы пользоваться функционалом на все 100%</h3>
    <div class="error" v-if="isError">Произошла ошибка при регистрации, попробуйте снова!</div>
    <form class="form" id="registerForm" @submit.prevent="submitForm">
      <div class="form-fields">
        <div class="field">
          Имя
          <FloatLabel>
            <InputText v-model="first_name" id="first_name" name="first_name" />
          </FloatLabel></div>
        <div class="field">
          Фамилия
          <FloatLabel>
            <InputText v-model="last_name"  id="last_name" name="last_name" />
          </FloatLabel>
        </div>
        <div class="field">
          Введите e-mail
          <FloatLabel>
            <InputText v-model="email" id="email" name="email" />
          </FloatLabel></div>
         <div class="field">
           Введите логин
           <FloatLabel>
             <InputText v-model="username" id="username" name="username" />
           </FloatLabel>
         </div>
        <div class="field">
          Введите пароль
          <InputText v-model="password" type="password" name="password" :feedback="false" /></div>
      </div>
      <div class="btn">
        <Button type="submit">Зарегистрироваться</Button>
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
      email: '',
      first_name: '',
      last_name: '',
      isError: false,
    };
  },
  watch: {
    username(newValue) {
      // Можно добавить дополнительную логику при изменении username
      console.log('Username changed:', newValue);
    },
    password(newValue) {
      // Можно добавить дополнительную логику при изменении password
      console.log('Password changed:', newValue);
    }
  },
  methods: {
    ...mapActions(['updateUserInfo']),
    async submitForm() {
      try {
        const formData = new FormData(document.getElementById('registerForm'));
        const response = await axios.post('http://localhost:8000/api/v1/register/', formData);
        if (response.status === 201) {
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
  margin-left: 40px;
}
h3{
  color: rgb(106, 39, 121);

}
.form-fields {
  color: rgb(106, 39, 121);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  gap: 1rem;
}
.field{
  display: flex;
  flex-direction: column;
}
.btn{
  margin-top: 30px;
}
.error{
  color: red;
  font-size: 16px;
}
</style>