<template>
  <div class="wrapper__head">
    <img  v-if="event.foto_one" :src="event.foto_one" alt="123" class="image main-photo">
    <div class="wrapper__head--text">
      <div class="newstyle">{{event.title}}</div>
      <div class="subscribe">
        <Button  @click="goToOrderPage()" class="subscribe1" label="Заказать мероприятие" />
      </div>
    </div>

  </div>
  <div class="info">
    <div class="info__text">
      <p>НАША МИССИЯ - СДЕЛАТЬ ВАШЕ МЕРОПРИЯТИЕ <span>ЯРКИМ</span> И <span>НЕЗАБЫВАЕМЫМ</span></p>

      <div class="info__block">
        <div class="info__block--1">50+ <br></br>мероприятий</div>
        <div class="">1000+ <br>довольных клиентов</div>
      </div>
    </div>
    <div class="info__description"><br>
     {{event.description_one}}
    </div>
  </div>
  <div class="pictures_collage">
    <img  v-if="event.foto_two" :src="event.foto_two" alt="123" class="image">
    <img  v-if="event.foto_three" :src="event.foto_three" alt="123" class="image">
    <img  v-if="event.foto_four" :src="event.foto_four" alt="123" class="image">
  </div>

  <div class="listing listing__order">
    <div class="listing__item">Закажи мероприятие!</div>
    <Button class="subscribe1" @click="goToOrderPage()" label="Заказать" />
  </div>
</template>

<script>
import Button from "primevue/button";
import axios from "axios";

export default {
  components: {Button},
  data() {
    return {
      event: {
        description_one: "Викторина по построению команды - это фантастический способ поощрить что-то столь важное для успеха бизнеса. Если можете, попробуйте включить их регулярно и они могут быть одной из движущих сил вашего успеха!",
        description_two: "Любая отличная викторина по тимбилдингу соединяет ваш персонал на личном уровне.\r\nТемы вашей викторины по возможности должны быть сосредоточены вокруг их. Странное офисное растение Чарли, упражнения Юрия за столом, булочка с корицей, которую Паула оставила в холодильнике на 6 недель; это отличный материал для веселой викторины, посвященной игрокам.",
        foto_one: "https://more-radosti.ru/wp-content/uploads/2015/10/gk.jpg",
        foto_two: "https://more-radosti.ru/wp-content/uploads/2018/11/more-radosti.ru_2018-11-09_07-34-22.jpg",
        foto_three: "https://more-radosti.ru/wp-content/uploads/2018/11/more-radosti.ru_2018-11-09_07-34-22.jpg",
        foto_four: "https://more-radosti.ru/wp-content/uploads/2018/11/more-radosti.ru_2018-11-09_07-34-22.jpg",
        id: 2,
        title: "Викторины"
      },
    }
  },
  beforeCreate() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  mounted() {
    this.fetchEvents();

  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo
    },
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/eventpage/${this.$route.params.id}`);
        this.event = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    },
    goToOrderPage(){
      if (this.userInfo.first_name){
        this.$router.push('/createOrder');
      } else {
        this.$router.push('/login');
      }
    }
  },
};
</script>

<style scoped lang="scss">
.wrapper__head{
  width: calc(100% + 240px);
  margin: 40px -120px;
  position: relative;
  display: flex;
  flex-direction: column;
  &--text{
    width: 100%;
    position: absolute;
    bottom: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(106, 39, 121);
  }
}
.info{
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  &__block {
    border: 4px solid red;
    border-radius: 12px;
    padding: 20px 12px;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    vertical-align: center;
    &--1 {
      border-right: 4px solid black;
    }
  }
  &__text{
    font-size: 23px;
    line-height: 27px;
    font-weight: 700;
    span{
      color: red;
    }
  }
  &__description{
    font-size: 22px;
    line-height: 27px;
  }
}
.pictures_collage{
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
.listing{
  margin-top: 60px;
  display: flex;
  gap: 70px;
  justify-content: center;
  background-color: #d59cde;
  width: calc(100% + 240px);
  margin: 40px -120px;
  align-items: center;
  padding: 10px;
  &__item {
    text-align: center;
    font-weight: bold;
    color: rgb(106, 39, 121);
  }
  &__content {
    margin: 0 120px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    padding: 40px;
    .image{
      width: 100%;
      border-radius: 6px;
    }
  }
  &__order {
    margin-top: 50px;
    font-size: 24px;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
  }
}
.main-photo{
  height: 400px;
  object-fit: cover;
}
.image{
  width: 100%;
}
.subscribe1
{
  background-color: red;
  color: white;
  border-color: red;
}
.newstyle{

   background-size: cover;
   background-position: center top;
   margin: 0 -120px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding-top: 220px;
   padding-bottom: 50px;
   margin-bottom: 60px;
   text-align: center;
   font-size: 2rem;
   font-weight: bold;
   color: rgb(106, 39, 121);
   backdrop-filter: blur(3px);
   padding: 20px;
   background-color: rgba(255, 239, 255, 0.2);
   border-radius: 10px;
}
</style>

