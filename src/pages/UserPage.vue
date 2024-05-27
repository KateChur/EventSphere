<template>
  <div class="profile">
    <div class="wrapper__profile">
    <h3>Мой профиль</h3>
    <form id="loginForm" class="form__profile" @submit.prevent="submitUserForm">
      <div class="form__profile--item">Фамилия
        <FloatLabel>
          <InputText v-model="surname"  name="surname" disabled/>
        </FloatLabel></div>
      <div class="form__profile--item"> Имя
        <FloatLabel>
          <InputText v-model="name"  name="name" disabled/>
        </FloatLabel></div>
      <div class="form__profile--item"> Почта
        <FloatLabel>
          <InputText v-model="email"  name="email" disabled/>
        </FloatLabel></div>
      <div class="form__profile--item">Имя пользователя
        <FloatLabel>
          <InputText v-model="login"  name="login" disabled />
        </FloatLabel></div>
    </form>
    </div>
    <div class="wrapper__intrestings">
      <h3>Мои интересы</h3>
      <div class="error" v-if="error">Произошла ошибка. Попробуйте позже</div>
      <p>Уважаемый пользователь, пожалуйстса, ответьте на вопросы ниже, чтобы мы могли подобрать для Вас наиболее подходящие мероприятия!</p>
      <form id="loginForm" class="form__intrestings" @submit.prevent="submitForm">
        <div class="form__intrestings--item">Выберите тип мероприятия, который Вас интересует:
          <FloatLabel>
            <Dropdown v-model="q1" :options="titlesEvents" placeholder="Тип мероприятия" class="md:w-20rem w-full" />
          </FloatLabel>
        </div>
        <div class="form__intrestings--item"> Напишите хобби и интересы Вашего коллектива в свободное время:
          <FloatLabel>
            <InputText v-model="q2"  name="q2" />
          </FloatLabel></div>
        <div class="form__intrestings--item"> Укажите цель Вашего тимбилдинг-мероприятия (например: сплочение коллектива, поднятие командного духа, отдых коллективом на природе):
          <FloatLabel>
            <InputText v-model="q3"  name="q3" />
          </FloatLabel></div>
        <div class="form__intrestings--item"> Укажите предпочитаемое место для проведения мероприятия (например: на природе, в творческой мастерской, в лофте):
          <FloatLabel>
            <InputText v-model="q4"  name="q4" />
          </FloatLabel></div>
        <div class="form__intrestings--item">Напишите особенности или предпочтения, которые стоит учесть при выборе тимбилдинг-мероприятия:
          <FloatLabel>
            <InputText  class="last" v-model="q5"  name="q5" />
          </FloatLabel></div>
        <div>
          <Button type="submit" label="Подобрать мероприятие" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import axios from 'axios';
import Dropdown from "primevue/dropdown";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    Password,
    InputText,
    Button,
    Dropdown
  },
  data() {
    return {
      surname: '',
      name:  '',
      email: '',
      login:  '',
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      titlesEvents: [
        'спортивные', 'творческие', 'культурные', 'образовательные', 'приключенческие', 'социальные', 'благотворительные', 'тематические'
      ],
      error: false,
    };
  },
  computed: {
    ...mapGetters(['getUserInfo'])
  },
  mounted() {
    this.surname = this.getUserInfo.last_name;
    this.name = this.getUserInfo.first_name;
    this.email = this.getUserInfo.email;
    this.login = this.getUserInfo.username;
  },
  methods: {
    ...mapActions(['updateRecomendatons']),
    getCSRFToken() {
      const cookieValue = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)');
      return cookieValue ? cookieValue.pop() : '';
    },
    async submitForm() {
      try {
        const csrfToken = this.getCSRFToken();
        const formData = new FormData()
        formData.append('answer1', this.q1);
        formData.append('answer2', this.q2);
        formData.append('answer3', this.q3);
        formData.append('answer4', this.q4);
        formData.append('answer5', this.q5);


        const response = await axios
            .post('http://localhost:8000/api/v1/recommendations/',
                formData,{
                  headers: {
                    'X-CSRFToken': 'R51qUk4twFeEjtCqbQcZcUvOKalEU6Pb',
                    'Content-Type': 'application/json'
                  }
                })

        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response)
        if (response.status === 200) {
          await this.updateRecomendatons(response.data.products);
          this.$router.push('/');

        }
      } catch (e) {
        this.error = true;
        console.log(e)
      }
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper__profile{
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 60%;

}
h3{
  color: rgb(106, 39, 121);
  text-align: center;
  font-size: 20px;

}
form {
  color: rgb(106, 39, 121);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.error {
  color: red;
  font-size: 24px;
  padding: 20px;
  font-weight: 600;
}
.form__profile{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 50px;
  border-bottom: 1px solid rgb(106, 39, 121);

  &--item{
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
  }
}
.profile{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.form__intrestings{
  &--item{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.last{
  width: 1000px;
}
</style>





