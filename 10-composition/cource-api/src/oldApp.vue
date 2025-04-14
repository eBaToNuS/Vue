<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr />
      <p>
        Название: <strong>{{ name }}</strong>
      </p>
      <p>
        Версия: <strong>{{ version }} ({{ doubleVersion }})</strong>
      </p>
      <div class="form-control">
        <!-- <input type="text" ref="textInput" /> -->
        <input type="text" v-model="firstName" />
      </div>
      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  /* toRefs, */ isRef,
  isReactive,
  computed,
  watch,
} from "vue";
export default {
  setup() {
    const name = ref("VueJS");
    const version = ref(3);
    // const textInput = ref(null);
    const firstName = ref("");
    const framework = reactive({ name: "VueJs", version: 2 });

    console.log(isRef(name));
    console.log(isRef(version.value));
    console.log(isReactive(framework.name));

    function changeInfo() {
      // framework.name = "Vue Умен!";
      // framework.version = 42;
      name.value = "Vue JS!";
      version.value = 48;

      // console.log(textInput.value.value);
      console.log(firstName.value);
    }

    const doubleVersion = computed(() => {
      return version.value * 2;
    });
    watch([doubleVersion, name], (newValues, oldValues) => {
      console.log("new vers", newValues[0]);
      console.log("new name", newValues[1]);

      console.log("old vers", oldValues[0]);
      console.log("old name", oldValues[1]);
    });
    watch(firstName, (newV) => {
      console.log(newV);
    });
    return {
      // test: framework.name,
      // testik: framework.version,
      // ...toRefs(framework),
      // textInput,
      firstName,
      name,
      version,
      change: changeInfo,
      doubleVersion,
    };
  },
  /*   data() {
      return {
        name: 'VueJS',
        version: 3
      }
    },
    methods: {
      changeInfo() {
        this.name = 'Vue JS!'
        this.version = 4
      }
    } */
};
</script>
