<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <AppButton @action="open">{{ isOpen ? "Закрыть" : "Открыть" }}</AppButton
    ><AppButton color="danger" v-if="wasRead" @action="$emit('unread-news')"
      >Отметить непрочитанной
    </AppButton>
    <div class="card" v-if="isOpen">
      <p v-if="isOpen">
        {{ text }}
      </p>
      <hr />
      <AppNewsList></AppNewsList>
      <AppButton
        class="btn primary"
        color="primary"
        @action="read"
        v-if="!wasRead"
        >Отметить прочитанной
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from "./appButton.vue";
import AppNewsList from "./AppNewsList.vue";
export default {
  props: {
    title: { type: String, required: true },
    text: {
      type: String,
      required: false,
      default: "Дополнительной информации нет",
      /* validator(value) {
        console.log(value);
        return true;
      }, */
    },
    wasRead: Boolean,
    /*     isOpen: Boolean , */
  },
  /* emits: ["open-news"], */
  emits: ["open-news", "read-news", "unread-news"],
  /* "open-news"(num) {
      if (num) {
        return true;
      }
      console.warn("No data in open-news emit");
      return false;
    }, */

  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.$emit("open-news");
      }
    },
    read() {
      if (!this.wasRead) {
        this.$emit("read-news");
      }
      this.isOpen = !this.isOpen;
    },
    /*     unread() {
      if (this.wasRead) {
        this.$emit("unread-news");
      }
    }, */
  },
  components: { AppButton, AppNewsList },
};
</script>
