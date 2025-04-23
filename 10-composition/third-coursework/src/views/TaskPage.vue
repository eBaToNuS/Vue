<template>
  <div>
    <div class="card">
      <h2>{{ task.title }}</h2>
      <p><strong>Статус</strong>: <AppStatus :type="'done'" /></p>
      <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
      <p><strong>Описание</strong>: {{ task.description }}</p>
      <div>
        <button class="btn">Взять в работу</button>
        <button class="btn primary">Завершить</button>
        <button class="btn danger">Отменить</button>
      </div>
    </div>
    <h3 class="text-white center">
      Задачи с id = <strong>Tут АЙДИ</strong> нет.
    </h3>
  </div>
</template>

<script>
import AppStatus from "../components/AppStatus";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const taskId = route.query.id; // Получаем ID из URL
    const tasks = ref([]); // Реактивный массив для хранения задач
    const task = ref("");
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://vue-third-coursework-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json"
        );

        if (!response.ok) throw new Error("Ошибка загрузки");

        const data = await response.json();

        // Преобразуем объект Firebase в массив
        tasks.value = Object.entries(data || {}).map(([id, task]) => ({
          id,
          ...task,
        }));
        task.value = tasks.value[0];
        console.log(tasks.value);
        console.log(task.value);
        // console.log(taskId);
        // console.log(tasks.value[0].id);
        console.log("Задачи загружены:", tasks.value);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
        alert("Не удалось загрузить задачи");
      }
    };

    // Вызываем при монтировании компонента
    onMounted(fetchTasks);
    return {
      tasks,
      task,
      taskId,
    };
  },
  components: { AppStatus },
};
</script>

<style scoped></style>
