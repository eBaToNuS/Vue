<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости на {{ now }}</h2>
      <span
        >Открыто: <strong>{{ openRate }}</strong> | Прочитано:
        <strong>{{ readRate }}</strong></span
      >
    </div>
    <app-news
      v-for="(item, idx) in news"
      :key="item.id"
      :title="item.title"
      :text="item.text"
      @open-news="openRate++"
      @read-news="readNews(idx)"
      :was-read="item.wasRead"
      @unread-news="unreadNews(idx)"
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
      readRate: 0,
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: "Джордж Вашингтон трагично погиб",
          text: "Был застрелен Д'Антесом" /* isOpen: false */,
          wasRead: false,
        },
        {
          title: "Путин выиграл войну",
          text: "Одержал вверх над Украиной" /* isOpen: false */,
          wasRead: false,
        },
        { title: "Я лучше всех" /* isOpen: false  */, wasRead: false },
      ],
    };
  },
  provide() {
    return {
      title: "Список всех новостей",
      news: this.news,
    };
  },
  methods: {
    readNews(idx) {
      this.readRate++;
      this.news[idx].wasRead = true;
    },
    unreadNews(idx) {
      this.readRate--;
      this.news[idx].wasRead = false;
    },
  },
  components: {
    appNews: AppNews,
  },
};
</script>

<style></style>
