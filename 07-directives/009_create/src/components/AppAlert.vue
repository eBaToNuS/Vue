<template>
  <div class="alert" :class="type">
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button class="btn" v-if="closable" :class="type" @click="$emit('close')">
      Скрыть
    </button>
  </div>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    text: String,
    title: String,
    closable: { type: Boolean, default: false },
    type: {
      type: String,
      default: "primary",
      validator(val) {
        return ["primary", "danger", "warning"].includes(val);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
