<template>
  <div class="listing-wrapper">
    <img src="../assets/images/secton_info-image.png" alt="" class="image">
    <div class="listing">
      <div class="listing__item">
        <div>10000+</div>
        <div>Мероприятий</div>
      </div>
      <div class="listing__item">
        <div>20000+</div>
        <div>Довольных клиентов</div>
      </div>
      <div class="listing__item">
        <div>1000+</div>
        <div>Площадок</div>
      </div>
      <div class="listing__item">
        <div>600+</div>
        <div>организаторов</div>
      </div>
    </div>

    <div class="listing__content">
      <p>Мы EventSphere - ваш надежный партнер в организации и проведении
        командообразующих мероприятий! Мы специализируемся на создании незабываемых и эффективных событий, которые помогут
        укрепить дружбу, доверие и результативность в вашей команде. Позвольте нам воплотить ваши идеи в жизнь и сделать ваше
        мероприятие неповторимым!
        <br>Мы стремимся быть не просто исполнителями, а стратегическими партнерами для наших клиентов. Мы глубоко погружаемся в их бизнес-процессы, изучаем особенности их команд и бизнес-цели, чтобы предложить наиболее эффективные и индивидуальные решения.

Наш подход основан на инновациях и постоянном обновлении. Мы следим за последними тенденциями в области управления персоналом, психологии команд и организации мероприятий, чтобы предложить нашим клиентам самые передовые и эффективные методики.</p>
      <img src="../assets/images/about1.jpg" alt="" class="image">
      <img src="../assets/images/about2.jpg" alt="" class="image">
      <p>Мы специализируемся на создании уникальных и инновационных мероприятий, направленных на укрепление командного духа, повышение мотивации сотрудников и развитие лидерских качеств.

Наша команда профессионалов обладает богатым опытом в организации разнообразных корпоративных мероприятий, от командных тренингов и квестов до корпоративных выездов и тимбилдингов.

Мы тщательно разрабатываем каждое мероприятие с учетом специфики вашей компании, целей и потребностей вашей команды. Наша цель - не просто провести мероприятие, а создать незабываемый опыт, который укрепит взаимоотношения в коллективе, повысит производительность и поможет достичь бизнес-целей вашей компании.

Присоединяйтесь к нам, чтобы вместе создавать успешные команды!"</p>
    </div>
    <div class="listing listing__order">
      <div class="listing__item">Закажи мероприятие!</div>
      <Button label="Заказать"/>
    </div>
  </div>

</template>

<script setup>

import Greeting from "@/components/Greeting.vue";
import Events from "@/components/Events.vue";
import Button from "primevue/button";
</script>



<style scoped lang="scss">
.listing-wrapper{
  width: calc(100% + 240px);
  margin: 0 -120px;
}
.listing{
  display: flex;
  gap: 70px;
  justify-content: center;
  background-color: #d59cde;
  width: 100%;
  align-items: center;
  padding: 10px;
  &__item {
    text-align: center;
    font-weight: bold;
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
    margin-top: 20px;
    flex-direction: column;
    gap: 10px
  }
}

.image {
  display: flex;
  width: 100%;

}

</style>