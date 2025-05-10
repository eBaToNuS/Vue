<template>
  <div class="card">
    <h1>Пользователи</h1>
    <div v-if="error">{{ error }}</div>
    <Suspense v-else>
      <template #default>
        <UserList />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import UserList from "@/components/UserList.vue";

export default defineComponent({
  components: { UserList },
  setup() {
    const error = ref<Error | null>(null);
    return { error };
  },
});
</script>
