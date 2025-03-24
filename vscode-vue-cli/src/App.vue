<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости на {{ now }}</h2>
      <span>Открыто: {{ openRate }}</span>
    </div>
    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :text="item.text"
      @open-news="openRate++"
    >
      <!--  -->
    </app-news>
  </div>
</template>
Lorem, ipsum dolor. Lorem, ipsum dolor.
<script>
import AppNews from "./AppNews.vue";
export default {
  data() {
    return {
      openRate: 0,
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: "Джордж Вашингтон трагично погиб",
          text: "Был застрелен Д'Антесом" /* isOpen: false */,
        },
        {
          title: "Путин выиграл войну",
          text: "Одержал вверх над Украиной" /* isOpen: false */,
        },
        { title: "Я лучше всех" /* isOpen: false  */ },
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
