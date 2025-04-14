<template>
  <div>
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <div class="form-control">
        <input type="text" v-model="firstName" />
      </div>
      <button class="btn" @click="change">Изменить</button>
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
import { ref, reactive, isRef, isReactive, watch, provide } from "vue";
export default {
  setup() {
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
      version,
      change: changeInfo,
      changeVersion,
    };
  },

  components: { FrameworkInfo },
};
</script>

<style lang="scss" scoped></style>
