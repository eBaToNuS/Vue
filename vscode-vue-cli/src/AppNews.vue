<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">Открыть</button>
    <!--  -->
    <p v-if="isOpen">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    text: {
      type: String,
      required: false,
      default: "Дополнительной информации нет",
      validator(value) {
        console.log(value);
        return true;
      },
    },
    /*     isOpen: Boolean , */
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
      this.$emit("open-news");
    },
  },
};
</script>
