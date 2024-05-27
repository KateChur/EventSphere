<template>
  <h3>Наши мероприятия</h3>
   <div class="events">
    <div class="event" v-for="event in events" :key="event.id">

        <img :src="event.foto_file" alt="Image" class="event__image" />
        <div class="texts">
          <RouterLink  :to="'/events/' + event.id"><div class="event__title">{{ event.title }}</div></RouterLink>
          <div class="event__description">{{ event.description }}</div>
        </div>
      <RouterLink :to="'/events/' + event.id"><div class="more"> Подробнее... <i class="pi pi-window-maximize" style="font-size: 1rem"></i></div> </RouterLink>

    </div>
  </div>
</template>

<script>

import axios from 'axios';
import Image from 'primevue/image';
export default {
  data() {
    return {
      events: [
        {
          image: "src/assets/images/event.png",
          date_crteated: "2024-04-20T",
          description: 'gsdfgdfgdfgdfg',
          event_date: '2024-04-22R15',
          id: 6,
          price: 1900,
          title: 'hello gsdfsdfsfd'
        },
        {
          image: "src/assets/images/event.png",
          date_crteated: "2024-04-20T",
          description: 'gsdfgdfgdfgdfg',
          event_date: '2024-04-22R15',
          id: 5,
          price: 1900,
          title: 'hello gsdfsdfsfd'
        },
        {
          image: "src/assets/images/event.png",
          date_crteated: "2024-04-20T",
          description: 'gsdfgdfgdfgdfg',
          event_date: '2024-04-22R15',
          id: 4,
          price: 1900,
          title: 'hello gsdfsdfsfd'
        },
        {
          image: "src/assets/images/event.png",
          date_crteated: "2024-04-20T",
          description: 'gsdfgdfgdfgdfg',
          event_date: '2024-04-22R15',
          id: 3,
          price: 1900,
          title: 'hello gsdfsdfsfd'
        },
        {
          image: "src/assets/images/event.png",
          date_crteated: "2024-04-20T",
          description: 'gsdfgdfgdfgdfg',
          event_date: '2024-04-22R15',
          id: 2,
          price: 1900,
          title: 'hello gsdfsdfsfd'
        },
        {
          image: "src/assets/images/event.png",
          date_crteated: "2024-04-20T",
          description: 'gsdfgdfgdfgdfg',
          event_date: '2024-04-22R15',
          id: 1,
          price: 1900,
          title: 'hello gsdfsdfsfd'
        },

      ] // массив для хранения данных о событиях
    };
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/mainpage/');
        this.events = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .events {
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    gap: 25px;
  }
  .event {
    width: calc(100% /3 - 30px);
    @media screen and (max-width: 1114px){
      width: calc(100% /2 - 30px);
    }
    @media screen and (max-width: 550px){
      width: calc(100% /1 - 30px);
    }
    height: 510px;
    display: flex;
    flex-direction: column;
    background: #F7E7FF;
    -webkit-box-shadow: 3px 4px 11px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 4px 11px -4px rgba(0,0,0,0.75);
    box-shadow: 3px 4px 11px -4px rgba(0,0,0,0.75);
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    &__image {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }

    &__title {
      font-size: 25px;
      margin-left: 10px;
      margin-bottom: 20px;
    }

    &__description {
      font-size: 17px;
      margin-left: 10px;
      margin-bottom: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 144px;
    }
  }
  .texts {
    padding: 20px;
  }
  .more {
    position: absolute;
    right: 10px;
    bottom: 8px;
  }
  h2{
    color: #8B5CF6;
    margin-bottom: 40px;
  }
  h3 {
    text-align: center;
    //font-family: 'Arial', sans-serif; /* красивый шрифт */
    //font-size: 36px; /* размер шрифта */
    //color: #5C0F76; /* фиолетовый цвет */
    //text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* тень текста */
    font-size: 2rem;
     font-weight: bold;
     color: rgb(106, 39, 121);
     backdrop-filter: blur(3px);
     padding: 20px;
     background-color: rgba(255, 239, 255, 0.2);
     border-radius: 10px;
    @media screen and (max-width: 730px){
      text-align: left;
      font-size: 1.6rem;
      padding: 10px;
    }
    @media screen and (max-width: 550px){
      padding: 0;
      font-size: 1.4rem;
    }
}
  .partner-text {
    color: #a775b8; /* Фиолетовый цвет текста */
    font-family: "Readex Pro"; /* Шрифт */
    font-size: 32px; /* Размер шрифта */
    font-weight: bold;
    line-height: 1.5; /* Межстрочный интервал */
    text-align: center; /* Выравнивание текста по центру */
    padding: 20px; /* Отступы вокруг текста */
    background-color: #f0e6fd; /* Фоновый цвет */
    border-radius: 10px; /* Скругление углов блока */
    box-shadow: 0px 4px 8px rgba(123, 104, 238, 0.2); /* Тень */
    border-color: #7C3AED;
    border-style: solid;
    border-width: 5px;

}
</style>