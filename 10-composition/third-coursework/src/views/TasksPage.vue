<template>
  <div>
    <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
    <!-- <template> -->
    <h3 class="text-white">Всего активных задач: {{ tasks.length }}</h3>

    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="'done'" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="viewTask(task.id)">Посмотреть</button>
    </div>
    <!-- </template> -->
  </div>
</template>
np
<script>
import AppStatus from "../components/AppStatus";
import { ref, onMounted } from "vue";
import { useRouter /* useRoute */ } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    // const route = useRoute();
    const tasks = ref([]); // Реактивный массив для хранения задач

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
        console.log(tasks.value.length);

        console.log("Задачи загружены:", tasks.value);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
        alert("Не удалось загрузить задачи");
      }
    };

    const viewTask = (taskId) => {
      router.push({ path: "/TaskPage", query: { id: taskId } });
    };

    // Вызываем при монтировании компонента
    onMounted(fetchTasks);
    return {
      tasks,
      viewTask,
    };
  },
  components: { AppStatus },
};
</script>
