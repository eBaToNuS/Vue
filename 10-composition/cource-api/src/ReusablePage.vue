<template>
  <div>
    <app-alert
      v-if="alert"
      title="Работаем с Composition"
      type="primary"
      @close="close"
    ></app-alert>
    <div class="card">
      <h1>Переиспользование</h1>

      <button class="btn primary" @click="toggle">
        {{ alert ? "Скрыть" : "Показать" }} сообщение
      </button>
      <button class="btn" @click="navigate">Перейти на главную</button>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import AppAlert from "./AppAlert.vue";
import { useAlert } from "./use/alert";
export default {
  setup() {
    // const { alert, toggle, close: closeAlert } = useAlert();
    // const alert = ref(false);
    const router = useRouter();
    const route = useRoute();
    const navigate = () => router.push("/");

    console.log(route.path);
    return {
      navigate,
      ...useAlert(true),
    };
  },
  components: { AppAlert },
};
</script>

<style lang="scss" scoped></style>
