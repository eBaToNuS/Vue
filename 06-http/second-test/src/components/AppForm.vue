<template>
  <form class="card card-w30" @submit.prevent="submit">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="type">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea v-model="value" id="value" rows="3"></textarea>
    </div>

    <button class="btn primary" :disabled="btnValid">Добавить</button>
  </form>
</template>

<script>
/* import axios from "axios"; */
export default {
  emits: ["submit"],
  data() {
    return {
      type: "title",
      name: "Nick",
      value: "",
      isValid: true,
      i: 0,
    };
  },

  methods: {
    submit() {
      /*       console.log(this.value);
      console.log(this.type); */
      this.$emit("submit", this.value, this.type);
      this.value = "";
    },
  },
  computed: {
    btnValid() {
      return this.value.length < 4 ? true : false;
    },
  },
};
</script>

<style lang="css" scoped></style>
