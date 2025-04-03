<template>
  <div :class="color">
    <h1>{{ value }}</h1>
  </div>
</template>

<script>
export default {
  props: { value: String },
  methods: {
    color() {
      console.log(123);
      return "danger";
    },
  },
};
</script>
