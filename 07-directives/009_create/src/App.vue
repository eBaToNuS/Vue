<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n("app.title") }}</h2>

      <button class="btn primary" @click="$alert('Wow')">
        {{ $i18n("app.buttonAlert") }}
      </button>
      <button class="btn danger" @click="changeLang">
        {{ $i18n("app.button") }}
      </button>
      <button class="btn primary" @click="modal = !modal">
        Открыть модалку
      </button>
      <teleport to="body">
        <app-modal v-if="modal" @closeModal="modal = false"></app-modal>
      </teleport>
    </div>
  </div>
</template>

<script>
import AppModal from "./components/AppModal.vue";

export default {
  inject: ["changeI18N"],
  data() {
    return {
      lang: "ru",
      modal: false,
    };
  },
  methods: {
    changeLang() {
      this.lang = this.lang == "ru" ? "en" : "ru";
      this.changeI18N(this.lang);
      this.$forceUpdate();
    },
  },
  components: { AppModal },
};
</script>

<style lang="scss" scoped></style>
