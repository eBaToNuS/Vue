<template>
  <div>
    <h1 class="text-white center">Задач пока нет</h1>
    <!-- <template> -->
    <h3 class="text-white">Всего активных задач: 0</h3>
    <div class="card">
      <h2 class="card-title">
        Название задачи
        <AppStatus :type="'done'" />
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date().toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="console.log(description)">
        Посмотреть
      </button>
    </div>
    <!-- </template> -->
  </div>
</template>

<script>
import AppStatus from "../components/AppStatus";
import { inject } from "vue";
export default {
  setup() {
    return {
      description: inject("description"),
      date: inject("date"),
      title: inject("title"),
    };
  },
  components: { AppStatus },
};
</script>
