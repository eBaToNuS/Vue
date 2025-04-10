<template>
  <header class="navbar">
    <strong>Счетчик: {{ counter }} ({{ doubleCounter }})</strong>
    <button class="btn danger" @click="add">Добавить 5</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    /*   counter() {
      return this.$store.getters.counter;
    }, */
    ...mapGetters("count", ["counter", "doubleCounter"]),
  },
  methods: {
    ...mapMutations("count", ["increment"]),
    add() {
      this.increment({ value: 5 });
      // this.$store.commit("increment", 5)
      /*       this.$store.commit({
        type: "increment",
        value: 5,
      }); */
    },
  },
};
</script>
