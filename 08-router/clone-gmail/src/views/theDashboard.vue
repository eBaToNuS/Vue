<template>
  <div class="card">
    <h1>Привет на главной</h1>

    <p>
      Тут ты можешь перейти на любую страницу и почитать заранее заготовленные
      письма :)
    </p>

    <router-link :to="{ name: 'email' }">To Mail</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter() {
    /* Выполняется после перехода на страницу в последнюю очередь */
    console.log("beforeRouteEnter");
  },
  beforeRouteLeave(to, from, next) {
    /* Выполняется перед переходом с этой страницы */
    const answer = confirm("Вы уверены?");
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style scoped></style>
