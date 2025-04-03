<template>
  <form class="card card-w30" @submit.prevent="submit">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="type">
        <option value="Title">Заголовок</option>
        <option value="Subtitle">Подзаголовок</option>
        <option value="Avatar">Аватар</option>
        <option value="Text">Текст</option>
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
      type: "Title",
      name: "Nick",
      value: "",
      isValid: true,
      id: "",
    };
  },

  methods: {
    submit() {
      this.id = Date.now();
      this.$emit("submit", this.value, this.type, this.id);
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
