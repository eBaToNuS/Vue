Vue.createApp({
  data: () => ({
    myHtml: "<h1> Html в vue.js <h1/>",
    title: "Заголовок",
    person: {
      firstName: "Nick",
      lastName: "Sulzhenko",
      age: 21,
    },
    arr: [1, 2, 3, 4, 5, 6],
  }),
}).mount("#app");
