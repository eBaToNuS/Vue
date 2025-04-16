<template>
  <div>
    <app-alert
      v-if="alert"
      title="Работаем с Composition"
      type="danger"
      @close="close"
    ></app-alert>
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <div class="form-control">
        <input type="text" v-model="firstName" />
      </div>
      <button class="btn" @click="change">Изменить</button>
      <button class="btn danger" @click="toggle">
        {{ alert ? "Скрыть" : "Показать" }} сообщение
      </button>
    </div>

    <framework-info
      :version="version"
      :name="name"
      @change-version="changeVersion"
    ></framework-info>
  </div>
</template>

<script>
import FrameworkInfo from "./FrameworkInfo.vue";
import AppAlert from "./AppAlert.vue";
import { ref, reactive, isRef, isReactive, watch, provide } from "vue";
import { useAlert } from "./use/alert";

export default {
  setup() {
    const { alert, toggle, close } = useAlert();
    // const alert = ref(true);
    const name = ref("VueJS");
    const version = ref(3);
    const firstName = ref("");
    const framework = reactive({ name: "VueJs", version: 2 });

    console.log(isRef(name));
    console.log(isRef(version.value));
    console.log(isReactive(framework.name));

    function changeInfo() {
      name.value = "Vue JS!";
      version.value = 48;
      console.log(firstName.value);
    }
    function changeVersion() {
      version.value = 5;
    }

    watch(firstName, (newV) => {
      console.log(newV);
    });

    // provide({ name: "name", version: "version" });
    provide("name", name);
    provide("version", version);

    return {
      alert,
      toggle,
      close,
      version,
      change: changeInfo,
      changeVersion,
    };
  },

  components: { FrameworkInfo, AppAlert },
};
</script>

<style lang="scss" scoped></style>
