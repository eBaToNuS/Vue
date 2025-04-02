<template>
  <div>
    <div class="container column">
      <app-form @submit="addText"></app-form>
      <app-resume :arrayText="values" :type="type"></app-resume>
    </div>
    <app-comments></app-comments>
  </div>
</template>

<script>
import AppComments from "./components/AppComments.vue";
import AppForm from "./components/AppForm.vue";
import AppResume from "./components/AppResume.vue";
export default {
  data() {
    return {
      values: [],
      type: "Заголовок",
    };
  },
  methods: {
    addText(value, type) {
      this.values.push(value);
      this.type = type;
      console.log(this.type);
    },
  },
  components: { AppForm, AppResume, AppComments },
};
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
