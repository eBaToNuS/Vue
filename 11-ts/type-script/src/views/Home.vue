<template>
  <div class="card">
    <h1>Как Vue работает с TypeScript?</h1>
    <h1>{{ title }}</h1>

    <button class="btn" @click="navigate">Открыть пользователей</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    return {
      title: "Как работать с Vue!",
      navigate: () => router.push("users"),
    };
  },
});
</script>
