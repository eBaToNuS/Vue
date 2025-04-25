<template>
  <div>
    <div class="card">
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

    const changeStatus = async (taskId, newStatus) => {
      try {
        // 1. Обновляем локально
        const taskIndex = tasks.value.findIndex((t) => t.id === taskId);
        if (taskIndex !== -1) {
          tasks.value[taskIndex].nameStatus = newStatus;
        }

        // 2. Отправляем на сервер
        const response = await fetch(
          `https://vue-third-coursework-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${taskId}.json`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nameStatus: newStatus,
            }),
          }
        );

        if (!response.ok) throw new Error("Ошибка обновления статуса");

        console.log("Статус успешно изменен");
      } catch (error) {
        console.error("Ошибка при изменении статуса:", error);
        // Можно добавить откат изменений, если обновление на сервере не удалось
      }
    };

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
