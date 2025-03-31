<template>
  <div v-if="people.length !== 0">
    <div class="card inline" :key="person.id" v-for="person in people">
      <h3>{{ person.firstName }}</h3>
      <button class="btn danger" @click="$emit('remove', person.id)">
        Удалить
      </button>
    </div>
  </div>
  <div class="card center" v-else>
    <h4>Людей пока нет.</h4>
    <button class="btn primary" @click="$emit('load')">Загрузить список</button>
  </div>
</template>

<script>
export default {
  emits: ["load", "remove"],
  props: ["people"],
};
</script>

<style lang="css" scoped>
.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
