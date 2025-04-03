<template>
  <div>
    <div class="container">
      <p>
        <button class="btn primary" @click="$emit('loadComments')">
          Загрузить комментарии
        </button>
      </p>
      <div v-if="comments.length" class="card">
        <h2>Комментарии</h2>
        <ul class="list">
          <li class="list-item" :key="comment.id" v-for="comment in comments">
            <div>
              <p>
                <strong>{{ comment.email }}</strong>
              </p>
              <small>{{ comment.body }}</small>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["loadComments"],
  props: { comments: Array },
  data() {
    return {
      clickLoad: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
