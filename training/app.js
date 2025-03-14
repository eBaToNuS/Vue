Vue.createApp({
  data() {
    return {
      notes: ["sdfg", "sdfasf"],
      myNote: "",
      myPlaceholder: "Введите текст",
    };
  },
  methods: {
    addNewNotes() {
      this.notes.push(this.myNote);
      this.myNote = "";
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
  },
}).mount("#app");
