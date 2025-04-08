<template>
  <div class="modal-backdrop" @click="$emit('closeModal')"></div>
  <div class="modal">
    <h3>"Это заголовок модалки"</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, tenetur.
    </p>
  </div>
</template>

<script>
export default {
  emits: ["closeModal"],
};
</script>

<style lang="scss" scoped></style>
