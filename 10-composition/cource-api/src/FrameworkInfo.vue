<template>
  <div class="card">
    <p>
      Название: <strong>{{ name }}</strong>
    </p>
    <p>
      Версия: <strong>{{ version }} ({{ doubleVersion }})</strong>
    </p>
    <button class="btn warning" @click="changeToFree">Махнуть версию</button>
  </div>
</template>

<script>
import { computed, inject } from "vue";
export default {
  emits: ["change-version"],
  setup(_, context) {
    function change() {
      context.emit("change-version", 5);
    }
    // inject({ name: "name", version: "version" });
    const version = inject("version");
    return {
      name: inject("name"),
      version: version,
      changeToFree: change,
      doubleVersion: computed(() => version.value * 2),
    };
  },
  //   computed: {
  //     doubleVersion() {
  //       return this.version * 2;
  //     },
  //   },
};
</script>

<style lang="scss" scoped></style>
