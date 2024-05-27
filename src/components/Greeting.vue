<template>
  <div class="greeting">
    <p class="greeting__text">Мероприятия, вдохновляющие единство.<br>EventSphere</p>
    <div class="greeting__buttons">
      <Dropdown style="font-size: 1.3rem" v-model="selectedEvent" :options="events" placeholder="Выберите мероприятие" class="w-full md:w-14rem" />
      <Dropdown style="font-size: 1.3rem" v-model="selectedLocation" :options="locations" placeholder="Выберите локацию" class="w-full md:w-14rem" />
      <Button style="font-size: 1.3rem" label="Поиск" class="no-phone"/><Button icon="pi pi-search" class="phone" severity="help" rounded aria-label="Search" />
    </div>
  </div>

</template>

<script>
  import Dropdown from 'primevue/dropdown';
  import Button from "primevue/button";
  export default {
    components: {
      Dropdown,
      Button
    },
    data(){
      return{
        selectedEvent: '',
        selectedLocation: '',
        events: [
          'Интерактивные лекции',
          'Групповые тренинги',
          'Мастер-классы',
          'Outdoor-тимбилдинг',
          'Викторины и квизы',
          'Краудфандинг-кампания',
        ],
        locations: [
          'Конференц-залы и отели',
          'Тренинговые центры',
          'Помещения для квестов',
          'Рестораны и кулинарные мастерские',
          'Спортивные площадки',
          'Природные парки и кемпинги',
        ]
      }
    }
  }
</script>


<style scoped lang="scss">
 .greeting {
   background-image: url("../assets/images/mainpic.jpg");
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
   @media screen and (max-width: 600px){
     margin: 0 -10px;
     display: flex;
     gap: 4px;
     padding-top: 160px;
     padding-bottom: 30px;
   }
   &__buttons {
     margin-top: 30px;
     display: flex;
     gap: 7px;
     @media screen and (max-width: 600px){
       margin-top: 20px;
       display: flex;
       gap: 4px;
       flex-wrap: wrap;
       align-items: center;
       justify-content: center;
     }
   }
   &__text {
     font-size: 2rem;
     font-weight: bold;
     color: rgb(106, 39, 121);
     backdrop-filter: blur(3px);
     padding: 20px;
     background-color: rgba(255, 239, 255, 0.2);
     border-radius: 10px;
     @media screen and (max-width: 732px){
       font-size: 1.4rem;
       padding: 15px;
       background-color: rgba(255, 239, 255, 0.4);
     }
     @media screen and (max-width: 550px){
       font-size: 1.1rem;
       padding: 10px;
     }
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