Vue.createApp({
  data: () => ({
    myHtml: "<h1> Html в vue.js <h1/>",
    title: "Заголовок",
    inputValue: "",
    person: {
      firstName: "Nick",
      lastName: "Sulzhenko",
      age: 21,
    },
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    notes: [],
  }),
  methods: {
    addItem() {
      if (this.$refs.myInput.value) {
        this.notes.unshift(this.$refs.myInput.value);
        this.$refs.myInput.value = "";
      }
    },
    deleteNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  computed: {
    evenItems() {
      return this.arr.filter((item) => item % 2 === 0);
    },
  },
}).mount("#app");
