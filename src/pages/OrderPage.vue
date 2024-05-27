<template>
  <div class="wrapper__head">
    <img class="image" src="../assets/images/events/Rectangle%207%20(3).png" alt="123">
    <div class="wrapper__head--text">
      <h1>Самые крутые квизы для твоей компании</h1>
      <div class="subscribe">
        <Button label="Заказать"/>
      </div>
    </div>

  </div>
  <div class="info">
    <div class="info__text">
      <p>НАША МИССИЯ - СДЕЛАТЬ ВАШЕ МЕРОПРИЯТИЕ <span>ЯРКИМ</span> И <span>НЕЗАБЫВАЕМЫМ</span></p>

      <div class="info__block">
        <div class="info__block--1">30+ форматов игры</div>
        <div class="">до 30 человек в команде</div>
      </div>
    </div>
    <div class="info__description">
      Квиз — развлечение для широкой публики. Это лишний повод встретиться с друзьями, пообщаться, вместе открыть что-то новое, посоперничать с другими и просто круто провести время. А еще это классный тимбилдинг. Например, поход на квиз можно подарить коллегам на 23 Февраля.
    </div>
  </div>
  <div class="pictures_collage">
    <img class="image" src="../assets/images/events/beautiful-caucasian-girls-are-ordering-daily-specials-from-menu-terrace-cafe%201.png" alt="123">
    <img class="image" src="../assets/images/events/john-schnobrich-2FPjlAyMQTA-unsplash%201.png" alt="123">
    <img class="image" src="../assets/images/events/medium-shot-queer-family-reading-brochure%201.png" alt="123">

  </div>

  <div class="listing listing__order">
    <div class="listing__item">Закажи мероприятие!</div>
    <Button label="Заказать"/>
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  components: {Button}
}
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

.image{
  width: 100%;

}
</style>