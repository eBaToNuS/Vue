Vue.createApp({
  data: () => ({
    myHtml: "<h1> Html в vue.js <h1/>",
    title: "Заголовок",
    person: {
      firstName: "Nick",
      lastName: "Sulzhenko",
      age: 21,
    },
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }),
  methods: {
    addItems(event) {
      this.addItems.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = "";
    },
  },
  computed: {
    evenItems() {
      return this.arr.filter((item) => item % 2 === 0);
    },
  },
}).mount("#app");
