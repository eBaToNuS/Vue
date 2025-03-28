<template>
  <div class="container tp-1">
    <div class="card">
      <h2>Slots</h2>
    </div>
    <app-block
      ><p>Важный текст</p>
      <template #header> <h3>Заголовок</h3></template>
      <template v-slot:footer
        ><hr />
        <small>Это footer</small></template
      >
    </app-block>
    <app-list
      ><template #default="{ idx, iter }"
        ><span style="color: red"
          ><strong>{{ idx + 1 }} </strong> item : {{ iter }}</span
        ></template
      ></app-list
    >
  </div>
</template>

<script>
import AppList from "./AppList.vue";
import AppBlock from "./AppBlock.vue";
export default {
  components: {
    AppBlock,
    AppList,
  },
};
</script>

<style lang="scss" scoped></style>
