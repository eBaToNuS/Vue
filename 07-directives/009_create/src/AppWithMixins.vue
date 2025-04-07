<template>
  <div class="container">
    <app-alert
      v-if="alert"
      title="Внимание!"
      text="Важное сообщение! Будьте бдительны!"
      :type="'danger'"
      closable
      @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? "Скрыть" : "Показать" }} сообщение
      </button>
    </div>
    <app-block></app-block>
  </div>
</template>

<script>
import alertMixin from "./alertMixin";
import AppAlert from "./components/AppAlert.vue";
import AppBlock from "./components/AppBlock.vue";
export default {
  mixins: [alertMixin],
  components: { AppAlert, AppBlock },
};
</script>
