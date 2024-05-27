<template>
  <div class="login_wrapper">
    <h3>Выберите мероприятие, место проведеления дату и время</h3>
    <div v-if="error" class="error">Произошла ошибка, попробуйте позже</div>
    <form id="loginForm" @submit.prevent="submitForm">
      0) Введите Ваш номер телефона, чтобы наш оператор связался с Вами:
      <FloatLabel>
        <InputText v-model="phone" placeholder="Номер телефона" class="md:w-20rem w-full" />
      </FloatLabel>
      1) Выберите мероприятие
      <FloatLabel>
        <Dropdown v-model="title" :options="titles" placeholder="Mероприятие" class="md:w-20rem w-full" />
      </FloatLabel>
      2) Место проведеления
      <FloatLabel>
        <Dropdown v-model="location" :options="locations" placeholder="Место" class="md:w-20rem w-full" />
      </FloatLabel>
      3) Выберите дату
      <div class="calendar">
        <Calendar v-model="date" name="date" inline showWeek />
        <div class="buttons" v-if="date">
          <SelectButton v-model="time" name="time" :options="options" optionLabel="name" />
        </div>
      </div>
      <div v-if="title && location && date && time">
        <Button type="submit">Сделать заказ</Button>
      </div>
    </form>
  </div>
</template>
<script>
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import SelectButton from 'primevue/selectbutton';
import Dropdown from 'primevue/dropdown'
import axios from 'axios';
import {ref} from "vue";

export default {
  components: {
    Password,
    InputText,
    Button,
    Calendar,
    SelectButton,
    Dropdown
  },
  data() {
    return {
      error: false,
      title: '',
      location: '',
      date: '',
      time: '',
      phone: '',
      showTime: false,
      options: [
        { name: '08-00', value: 8 },
        { name: '09-00', value: 9 },
        { name: '10-00', value: 10 },
        { name: '11-00', value: 11 },
        { name: '12-00', value: 12 },
        { name: '13-00', value: 13 },
        { name: '14-00', value: 14 },
        { name: '15-00', value: 15 },
        { name: '16-00', value: 16 },
        { name: '17-00', value: 17 },
        { name: '18-00', value: 18 },
        { name: '19-00', value: 19 },
        { name: '20-00', value: 20 }
      ],
      titles: [
        'Групповой тренинг',
        'Мастер-класс',
        'Outdoor-тимбилдинг',
        'Викторина',
        'Квиз',
        'Краудфандинг-кампания',
        'Интерактивная лекция',
        'Квест',
      ],
      locations: [
        'Конференц-зал',
        'Тренинговый центр',
        'Помещения для квеста',
        'Ресторан',
        'Кулинарная мастерская',
        'Спортивная площадка',
        'Природный парк',
        'Кемпинг',
      ]
    };
  },
  beforeCreate() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  computed: {
    userInfo(){
      return this.$store.state.userInfo
    }
  },
  methods: {
    async submitForm() {
      try {
        const formData = new FormData()
        formData.append('title', this.title);
        formData.append('location', this.location);
        formData.append('day', this.date.toISOString().slice(0, 10));
        formData.append('time', this.time.value);
        const response = await axios.post('http://localhost:8000/api/v1/order/',formData);
        if (response) {
          await this.sendToSubscribers()
          this.error = false;
          this.$router.push('/thank_you');
        }
      } catch (e) {
          this.error = true;
          console.log(e)
      }
    },
    async sendToSubscribers() {
      const token = "7084469930:AAGxclM2LrtjsyJqO23zl8FhMDn4E1Wyhvo";
      const users = ["639281427", "408745156"];


      const message = `Клиент: ${this.userInfo.first_name}%0AНомер телефона ${this.phone}%0A просит обратную связь. %0A Его заказ%0A Название: ${this.title} %0A Место проведения: ${this.location} %0A День: ${this.date.toISOString().slice(0, 10)} %0A Время: ${this.time.value}:00`;

      try {
        for (let el of users) {
          const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${el}&text=${message}&parse_mode=html`;
          await axios.get(url);
          await new Promise(resolve => setTimeout(resolve, 1000)); // Ждем 1 секунду перед отправкой следующего запроса
        }
      } catch (error) {
        console.error("Ошибка при отправке сообщений:", error);
      }
    }

  },
};
</script>

<style scoped>
.login_wrapper{
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
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
  font-size: 24px;
  font-weight: 600;
  padding: 40px;
}

.calendar{
  display: flex;
  flex-direction: row;
  gap: 40px;
  .buttons{
    .p-selectbutton{
      gap: 20px;
      display: flex;
      flex-wrap: wrap;
      padding: 50px;
      margin-right: 80px;
      .p-component{

      }
    }
  }
}
</style>





