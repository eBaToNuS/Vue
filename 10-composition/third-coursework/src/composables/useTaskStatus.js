// src/composables/useTaskStatus.js
import { ref } from "vue";

export function useTaskStatus() {
  const tasks = ref([]);
  const error = ref(null);
  const isLoading = ref(false);

  const changeStatus = async (taskId, newStatus) => {
    isLoading.value = true;
    error.value = null;

    try {
      // 1. Обновляем локально
      updateLocalStatus(taskId, newStatus);

      // 2. Отправляем на сервер
      await updateServerStatus(taskId, newStatus);
    } catch (err) {
      handleError(err);
    } finally {
      isLoading.value = false;
    }
  };

  // Вспомогательные функции
  const updateLocalStatus = (taskId, newStatus) => {
    const taskIndex = tasks.value.findIndex((t) => t.id === taskId);
    if (taskIndex !== -1) {
      tasks.value[taskIndex].nameStatus = newStatus;
    }
  };

  const updateServerStatus = async (taskId, newStatus) => {
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
  };

  const handleError = (err) => {
    console.error("Ошибка при изменении статуса:", err);
    error.value = err.message || "Неизвестная ошибка";
    // Здесь можно добавить откат изменений
  };

  return {
    tasks,
    changeStatus,
    isLoading,
    error,
  };
}
