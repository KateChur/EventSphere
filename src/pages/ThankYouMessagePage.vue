<template>
  <div class="thank_you">
    <h1>Заказ успешно оформлен!</h1>
    <h3>Уважаемый пользователь, благодарим Вас за оформление заказа!</h3>
    <RouterLink class='btn' to="/"><Button label="На главную" /></RouterLink>
  </div>
</template>

<script setup>
  import Button from "primevue/button";
</script>

<style>
h1{
color: rgb(106, 39, 121);
}
.thank_you{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 60px;
}
.btn{
  margin-top: 60px;
}
</style>