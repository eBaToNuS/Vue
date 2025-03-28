<template>
  <div class="card">
    <h3>
      <slot name="header"></slot>
      <slot name="default">Нет текста</slot>
      <div v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
