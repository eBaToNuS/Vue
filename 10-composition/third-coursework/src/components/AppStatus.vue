<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    nameStatus: {
      type: String,
      validator(value) {
        return ["active", "done", "pending", "cancelled"].includes(value);
      },
    },
  },
  setup(props) {
    const classesMap = {
      active: "primary",
      cancelled: "danger",
      done: "primary",
      pending: "warning",
    };

    const textMap = {
      active: "Активен",
      cancelled: "Отменен",
      done: "Завершен",
      pending: "Выполняется",
    };

    const className = ref(classesMap[props.nameStatus]);
    const text = ref(textMap[props.nameStatus]);

    watch(props, (val) => {
      className.value = classesMap[val.nameStatus];
      text.value = textMap[val.nameStatus];
    });
    console.log("gfds", props.nameStatus);
    return {
      className,
      text,
    };
  },
};
</script>

<style lang="scss" scoped></style>
