<template>
  <div>
    <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
    <!-- <template> -->
    <h3 class="text-white">Всего активных задач: {{ taskIsActive }}</h3>

    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="'done'" :nameStatus="task.nameStatus" />
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

<script>
import AppStatus from "../components/AppStatus";

import { useStore } from "vuex";
import { /* watch, */ ref, onMounted, computed } from "vue";
import { useRouter /* useRoute */ } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const tasks = ref([]);
    // const route = useRoute();

    // const active = ref("active");
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
    const updateActiveTasks = () => {
      const activeCount = tasks.value.filter(
        (task) => task.nameStatus === "active"
      ).length;
      store.commit("SET_ACTIVE_TASKS", activeCount);
    };
    const taskIsActive = computed(() => store.getters.taskIsActive);
    onMounted(() => {
      fetchTasks().then(() => {
        updateActiveTasks();
      });
    });
    return {
      tasks,
      viewTask,
      taskIsActive,
    };
  },
  components: { AppStatus },
};
</script>
