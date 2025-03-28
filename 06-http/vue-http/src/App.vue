<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input
          type="text"
          id="name"
          v-model.trim="name"
          placeholder="Иван"
          v-model="name"
        />
      </div>
      <button class="btn primary" :disabled="name.length === 0">
        Создать человека
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async createPerson() {
      console.log(this.name);
      // https://vue-stage-http-default-rtdb.asia-southeast1.firebasedatabase.app/people.json
      const response = await fetch(
        "https://vue-stage-http-default-rtdb.asia-southeast1.firebasedatabase.app/people.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName: this.name }),
        }
      );
      const firebaseData = await response.json();
      console.log(firebaseData);
    },
  },
};
</script>

<style></style>
