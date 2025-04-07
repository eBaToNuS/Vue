<template>
  <div class="container">
    <app-alert
      v-if="alert"
      title="Внимание!"
      text="Важное сообщение! Будьте бдительны!"
      @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? "Скрыть" : "Показать" }} сообщение
      </button>
    </div>
  </div>
</template>

<script>
import alertMixin from "@/alertMixin";
import AppAlert from "./AppAlert.vue";
export default {
  mixins: [alertMixin],
  components: { AppAlert },
};
</script>
