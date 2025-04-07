<template>
  <div class="container">
    <div class="card">
      <h2 v-color:[type].blink.hover="myColor">Разговор про директивы</h2>
      <div class="form-control">
        <label for="inp">Активный по умолчанию</label>
        <input v-focus type="text" id="inp" />
      </div>
      <button
        class="btn primary"
        @click="myColor = myColor == 'darkred' ? 'darkblue' : 'darkred'"
      >
        Сделать синим!
      </button>
      <button
        class="btn primary"
        @click="type = type == 'color' ? 'backgroundColor' : 'color'"
      >
        Переключить тип
      </button>
    </div>
  </div>
</template>

<script>
import colorDirective from "./colorDirective";
import focusDirective from "./focusDirective";

export default {
  data() {
    return {
      myColor: "darkred",
      type: "color",
    };
  },
  methods: {
    toggleMyColor() {
      this.myColor = this.myColor == "darkred" ? "darkblue" : "darkred";
    },
  },
  directives: {
    focus: focusDirective,
    color: colorDirective,
  },
};
</script>
