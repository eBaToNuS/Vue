<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="isOpen = !isOpen">Открыть</button>
    <p v-if="isOpen">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  /* props: ["title", "text"], */
  props: {
    title: String,
    text: String,
  },
  data() {
    return {
      item: "Item string",
      isOpen: false,
    };
  },
};
</script>
