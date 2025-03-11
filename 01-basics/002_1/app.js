const App = {
  data() {
    return {
      appTitle: "Заметки",
      myPlaceholder: "Введите текст",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    deleteButton(index) {
      this.notes.splice(index, 1);
      console.log(index);
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
  },
  computed: {
    doubleCount() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (this.inputValue.length > 10) this.inputValue = "";
    },
  },
};

Vue.createApp(App).mount("#app");
