<template>
  <div class="" v-if="events.length">
  <h3>Рекомендации для Вас</h3>
<!--  <div class="events">-->
<!--    <div class="event" v-for="event in events" :key="event.id">-->

<!--      <img :src="`http://localhost:8000/media/${event.foto_file}`" alt="Image" class="event__image" />-->
<!--      <div class="texts">-->
<!--        <RouterLink  :to="'/events/' + event.id"><div class="event__title">{{ event.title }}</div></RouterLink>-->
<!--        <div class="event__description">{{ event.description }}</div>-->
<!--      </div>-->
<!--      <RouterLink :to="'/events/' + event.id"><div class="more"> Подробнее... <i class="pi pi-window-maximize" style="font-size: 1rem"></i></div> </RouterLink>-->
<!--    </div>-->
<!--  </div>-->
<!--  </div>-->
  <Carousel :value="events" :numVisible="3" :numScroll="2" :responsiveOptions="responsiveOptions">
    <template #item="event">
      <div class="">
        <div class="item">
          <div class="">
            <div class="relative mx-auto">
              <img :src="`http://localhost:8000/media/${event.data.foto_file}`" alt="Image" class="w-full border-round picture" />
            </div>
          </div>
          <div class="">
            <RouterLink  :to="'/events/' + event.data.id">
              <div class="event__title">{{ event.data.title }}</div>
            </RouterLink>
            <div class="event__description">{{ event.data.description }}</div>
          </div>
          <RouterLink :to="'/events/' + event.data.id"><div class="more"> Подробнее... <i class="pi pi-window-maximize" style="font-size: 1rem"></i></div> </RouterLink>
        </div>
      </div>
    </template>
  </Carousel>
  </div>
</template>

<script>

import axios from 'axios';
import Image from 'primevue/image';
import {mapActions, mapGetters} from "vuex";
import { mapState } from 'vuex'
import Carousel from "primevue/carousel";

export default {
  components:{
    Carousel
  },

  data() {
    return {
      events: [
        // {
        //   description: "Проведение мастер-класса по рисованию, гончарному делу или созданию предметов рукоделия поможет участникам выразить свою творческую идею и укрепит взаимодействие в команде через совместное творчество.",
        //   foto_file: "src/assets/images/event.png",
        //   id: 1,
        //   title: "Мастер-классы",
        // },
        // {
        //   description: "Проведение мастер-класса по рисованию, гончарному делу или созданию предметов рукоделия поможет участникам выразить свою творческую идею и укрепит взаимодействие в команде через совместное творчество.",
        //   foto_file: "src/assets/images/event.png",
        //   id: 2,
        //   title: "Мастер-классы",
        // },
        // {
        //   description: "Проведение мастер-класса по рисованию, гончарному делу или созданию предметов рукоделия поможет участникам выразить свою творческую идею и укрепит взаимодействие в команде через совместное творчество.",
        //   foto_file: "src/assets/images/event.png",
        //   id: 3,
        //   title: "Мастер-классы",
        // },
        // {
        //   description: "Проведение мастер-класса по рисованию, гончарному делу или созданию предметов рукоделия поможет участникам выразить свою творческую идею и укрепит взаимодействие в команде через совместное творчество.",
        //   foto_file: "src/assets/images/event.png",
        //   id: 4,
        //   title: "Мастер-классы",
        // },
        // {
        //   description: "Проведение мастер-класса по рисованию, гончарному делу или созданию предметов рукоделия поможет участникам выразить свою творческую идею и укрепит взаимодействие в команде через совместное творчество.",
        //   foto_file: "src/assets/images/event.png",
        //   id: 5,
        //   title: "Мастер-классы",
        // },
        // {
        //   description: "Проведение мастер-класса по рисованию, гончарному делу или созданию предметов рукоделия поможет участникам выразить свою творческую идею и укрепит взаимодействие в команде через совместное творчество.",
        //   foto_file: "src/assets/images/event.png",
        //   id: 6,
        //   title: "Мастер-классы",
        // },
      ],
      responsiveOptions: [
        {
          breakpoint: '1400px',
          numVisible: 3,
          numScroll: 2
        },
        {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    };
  },
  mounted() {
   this.events = this.getRecomendatons
  },
  computed: {
    ...mapGetters(['getRecomendatons'])
  },

  methods: {
    getSeverity(status) {
      switch (status) {
        case 'INSTOCK':
          return 'success';

        case 'LOWSTOCK':
          return 'warning';

        case 'OUTOFSTOCK':
          return 'danger';

        default:
          return null;
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
    margin-top: 10px;
    font-size: 25px;
  }

  &__description {
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
.texts {
  padding: 20px;
}
.more {
  display: flex;
  justify-content: flex-end
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
.item{
  padding: 30px;

}
.p-carousel-item{
  display: flex;
}
.picture{
  width: 100%;
}
</style>