<template>
  <div class="card card-w70">
    <div v-if="blocks.length !== 0">
      <div class="" :key="block.id" v-for="block in blocks">
        <component
          :is="'Resume' + block.type"
          :key="appKey"
          :value="block.value"
        >
          <h1>Да</h1>
        </component>
      </div>
    </div>
    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import ResumeAvatar from "./parts/ResumeAvatar.vue";
import ResumeSubtitle from "./parts/ResumeSubtitle.vue";
import ResumeText from "./parts/ResumeText.vue";
import ResumeTitle from "./parts/ResumeTitle.vue";

export default {
  data() {
    return {};
  },
  props: {
    blocks: Array,
    type: String,
  },
  methods: {
    appKey() {
      console.log(this.blocks);
      return this.blocks.id;
    },
  },
  components: { ResumeAvatar, ResumeSubtitle, ResumeText, ResumeTitle },
};
</script>

<style lang="scss" scoped></style>
