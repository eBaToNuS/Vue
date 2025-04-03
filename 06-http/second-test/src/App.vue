<template>
  <div>
    <div class="container column">
      <app-form @submit="addText"></app-form>
      <app-resume :blocks="blocks"></app-resume>
    </div>
    <app-loader v-if="loading === true"></app-loader>
    <app-comments
      v-else
      :comments="comments"
      @loadComments="loadComments"
    ></app-comments>
  </div>
</template>

<script>
import AppComments from "./components/AppComments.vue";
import AppForm from "./components/AppForm.vue";
import AppLoader from "./components/AppLoader.vue";
import AppResume from "./components/AppResume.vue";
export default {
  data() {
    return {
      blocks: [],
      loading: false,
      comments: [],
    };
  },
  methods: {
    addText(value, type, id) {
      this.blocks.push({ value: value, type: type, id: id });
      console.log(this.blocks);
    },
    async loadComments() {
      this.loading = true;
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=42"
      );
      this.comments = await res.json();
      this.loading = false;
    },
  },
  components: { AppForm, AppResume, AppComments, AppLoader },
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
