<script>
import Greeting from "@/components/Greeting.vue";
import Events from "@/components/Events.vue";
import Recomendations from "@/components/Recomendations.vue";
export default {

  components: {
    Recomendations,
    Greeting,
    Events,
  }
}

</script>

<template>
  <div class="main-page">
    <div>
      <Greeting />
    </div>
    <div>
      <Recomendations />
      <Events />
    </div>

  </div>

</template>

<style scoped>
  .main-page{
    width: 100%;
    margin-right: 50px;
  }
</style>