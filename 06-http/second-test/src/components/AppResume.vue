<template>
  <div class="card card-w70">
    <div class="" v-if="arrayText.length !== 0">
      <h1>Резюме Nickname</h1>
      <div class="avatar">
        <img
          src="https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png"
        />
      </div>
      <h2>Опыт работы</h2>
      <p v-for="text in arrayText" :key="text">
        {{ text }}
      </p>
    </div>
    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    arrayText: Array,
    type: String,
  },
};
</script>

<style lang="scss" scoped></style>
