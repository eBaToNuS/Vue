<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>
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
    <app-loader v-if="loading"></app-loader>
    <app-people-list
      v-else
      @remove="removePerson"
      :people="people"
      @load="loadPeople"
    ></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from "./AppPeopleList.vue";
import axios from "axios";
import AppAlert from "./AppAlert.vue";
import AppLoader from "./AppLoader.vue";
export default {
  data() {
    return {
      people: [],
      name: "",
      alert: null,
      loading: false,
    };
  },
  mounted() {
    this.loadPeople();
  },
  methods: {
    async removePerson(id) {
      await axios.delete(
        `https://vue-stage-http-default-rtdb.asia-southeast1.firebasedatabase.app/people/${id}.json`
      );
      this.people.splice(this.people.indexOf(id), 1);
    },
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
      this.people.push({
        firstName: this.name,
        id: firebaseData.name,
      });
      this.loadPeople();
      console.log(firebaseData);
      this.name = "";
    },
    async loadPeople() {
      try {
        this.loading = true;

        const { data } = await axios.get(
          "https://vue-stage-http-default-rtdb.asia-southeast1.firebasedatabase.app/people.json"
        );
        this.people = Object.keys(data).map((key) => {
          return { id: key, ...data[key] };
        });
        this.loading = false;
      } catch (e) {
        this.loading = false;
        this.alert = {
          type: "danger",
          title: "Пользователей нет",
          text: "Введите первого пользователя",
        };

        console.log(e.message);
      }
    },
  },
  components: {
    AppPeopleList,
    AppAlert,
    AppLoader,
  },
};
</script>

<style></style>
