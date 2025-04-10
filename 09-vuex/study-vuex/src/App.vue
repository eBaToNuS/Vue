<template>
  <div class="container with-nav">
    <the-navbar></the-navbar>
    <div class="card">
      <h1>{{ toUpperCase }}</h1>
      <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
      <button class="btn primary" @click="increment">Добавить</button>

      <button
        class="btn primary"
        @click="incrementAsync({ value: 10, delay: 1000 })"
      >
        Добавить 10
      </button>
    </div>
  </div>
</template>

<script>
import TheNavbar from "./TheNavbar";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: { TheNavbar },
  /*   data() {
    return {
      counter: 0,
    };
  }, */
  computed: {
    ...mapGetters("count", ["counter", "doubleCounter"]),
    ...mapGetters(["toUpperCase"]),
  },
  methods: {
    ...mapMutations({
      increment: { type: "count/increment", value: 1 },
    }),
    ...mapActions("count", ["incrementAsync"]),
    // incrementAsync() {
    //   this.incrementAsync({ value: 10, delay: 800 });
    //   // this.$store.dispatch("incrementAsync", { value: 10, delay: 2000 });
    // },
  },
};
</script>
