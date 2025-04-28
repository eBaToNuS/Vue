<template>
  <div>
    <div class="card" v-if="task">
      <h2>{{ task.title }}</h2>
      <p>
        <strong>Статус</strong>:
        <AppStatus :type="'done'" :nameStatus="task.nameStatus" />
      </p>
      <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
      <p><strong>Описание</strong>: {{ task.description }}</p>
      <div>
        <button class="btn" @click="changeStatus(task.id, 'pending')">
          Взять в работу
        </button>
        <button class="btn primary" @click="changeStatus(task.id, 'done')">
          Завершить
        </button>
        <button class="btn danger" @click="changeStatus(task.id, 'cancelled')">
          Отменить
        </button>
        <button class="btn primary" @click="changeStatus(task.id, 'active')">
          Активировать
        </button>
      </div>
    </div>
    <div class="card center" v-else>
      <strong> Задачи с id = {{ taskId }} нет</strong>
    </div>
  </div>
</template>

<script>
import AppStatus from "../components/AppStatus";
import { useTaskStatus } from "@/composables/useTaskStatus";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const taskId = route.query.id; // Получаем ID из URL

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
        task.value = tasks.value.find((t) => t.id === taskId);
        // console.log(taskId);
        // console.log(tasks.value[0].id);
        console.log("Задачи загружены:", tasks.value);
        console.log("nameStatus", task.value.nameStatus);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
        alert("Не удалось загрузить задачи");
      }
    };
    const { tasks, changeStatus } = useTaskStatus();

    // Вызываем при монтировании компонента
    onMounted(fetchTasks);

    return {
      tasks,
      task,
      taskId,
      changeStatus,
    };
  },
  components: { AppStatus },
};
</script>

<style scoped></style>
