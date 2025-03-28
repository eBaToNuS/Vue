<template>
  <div class="container tp-1">
    <div class="card">
      <async-component></async-component>
      <h2>Динамические и асинхронные компоненты</h2>
      <app-button ref="myBtn" @action="active = 'one'" :color="oneColor"
        >One</app-button
      >
      <app-button @action="active = 'two'" :color="twoColor">Two</app-button>
    </div>
    <!--     <app-text-one v-if="active == 'one'"></app-text-one>
    <app-text-two v-else-if="active == 'two'"></app-text-two> -->
    <keep-alive><component :is="componentName"></component></keep-alive>
  </div>
</template>

<script>
import AppButton from "./appButton.vue";
import AppTextOne from "./AppTextOne.vue";
import AppTextTwo from "./AppTextTwo.vue";
export default {
  data() {
    return {
      active: "one",
    };
  },
  computed: {
    // componentName() {
    //   return "app-text-" + this.active;
    // },
    componentName: {
      get() {
        return "app-text-" + this.active;
      },
      set(value) {
        console.log("componentsName", value);
      },
    },
    oneColor() {
      return this.active === "one" ? "primary" : "";
    },
    twoColor() {
      return this.active === "two" ? "primary" : "";
    },
  },
  components: { AppButton, AppTextOne, AppTextTwo },
};
</script>

<style lang="scss" scoped></style>
