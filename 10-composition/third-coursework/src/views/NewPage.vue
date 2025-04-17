<template>
  <form class="card" @submit.prevent="console.log('sub')">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="disabled">Создать</button>
  </form>
</template>

<script>
import { ref, computed, watch } from "vue";
export default {
  setup() {
    const title = ref("");
    const date = ref("");
    const description = ref("");

    const disabled = computed(() => {
      if (title.value && date.value && description.value) {
        return false;
      }
      return true;
    });

    watch(title, (newV) => {
      console.log(newV);
    });
    watch(date, (newV) => {
      console.log(newV);
    });
    watch(description, (newV) => {
      console.log(newV);
    });

    return {
      title,
      disabled,
      date,
      description,
    };
  },
};
</script>
