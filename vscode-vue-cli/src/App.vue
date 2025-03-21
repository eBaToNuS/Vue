<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости на {{ now }}</h2>
    </div>
    <app-news v-for="item in news" :key="item" :title="item" text="LORE">
    </app-news>
  </div>
</template>
Lorem, ipsum dolor. Lorem, ipsum dolor.
<script>
import AppNews from "./AppNews.vue";
export default {
  data() {
    return {
      i: 0,
      now: new Date().toLocaleDateString(),
      news: [
        "Джордж Вашингтом трагично погиб",
        "Путин выиграл войну",
        "Я лучше всех",
      ],
    };
  },
  methods() {},
  components: {
    appNews: AppNews,
  },
};
</script>

<style></style>
