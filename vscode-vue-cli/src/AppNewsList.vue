<template>
  <div>
    <h4>{{ title }}</h4>
    <ul>
      <li v-for="item in news">
        {{ item.title }} <span v-if="item.wasRead">!!!</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ["title", "news"],
};
</script>

<style lang="scss" scoped></style>
