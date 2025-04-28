<template>
  <form class="card" @submit.prevent="submit">
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
import { ref, computed } from "vue";
import { useRouter /* useRoute */ } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const title = ref("");
    const date = ref("");
    const description = ref("");

    const tasks = ref([]); // Добавлено для хранения данных
    const disabled = computed(() => {
      return !(title.value && date.value && description.value);
    });
    const createTask = async () => {
      try {
        const targetDate = new Date(date.value);
        const today = new Date();
        const response = await fetch(
          "https://vue-third-coursework-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title.value,
              date: date.value,
              description: description.value,
              nameStatus: today <= targetDate ? "active" : "cancelled",
            }),
          }
        );
        const firebaseData = await response.json();
        tasks.value.push({
          id: firebaseData.name,
          title: title.value,
          date: date.value,
          description: description.value,
        });
        alert("Задача создана!");
      } catch (error) {
        console.error("Ошибка:", error);
        alert("Ошибка создания: " + error.message);
      }
    };
    const submit = () => {
      // Добавлена функция submit
      createTask();
      router.push({ path: "/TasksPage" });
    };
    return {
      title,
      date,
      description,
      tasks,
      disabled,
      submit,
      createTask,
    };
  },
};
</script>
