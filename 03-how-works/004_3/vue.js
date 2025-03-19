// вы можете как угодно изменять программу и код
// доавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      steps: [
        {
          title: "Основы",
          text: "В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем всю базу фреймворка.",
        },
        {
          title: "Компоненты",
          text: "Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.",
        },
        {
          title: "Роутер",
          text: "В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.",
        },
        {
          title: "Vuex",
          text: "В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.",
        },
        {
          title: "Composition",
          text: "Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.",
        },
      ],
      btnActive: [true, false, false, false],
      btnDone: [false, false, false, false],
      completeBtn: "Вперед",
      againBtn: "Назад",
      showButton: true,
    };
  },
  methods: {
    reset() {
      this.showButton = false;
      this.btnActive.fill(false);
      this.btnDone[4] = true;
      this.againBtn = "Начать заново";
      // начать заного
    },
    nextOfFinish() {
      // кнопка вперед или закончить
    },
    setActive(idx) {
      if (this.againBtn == "Начать заново") {
        this.againBtn = "Назад";
        this.btnActive.fill(false);
        this.btnDone.fill(false);
        this.completeBtn = "Вперед";
        this.showButton = true;
        idx = 0;
        this.activeIndex = 0;
      }
      if (idx >= 1 && idx <= 4) {
        this.btnActive.fill(false);
        this.btnDone.fill(false);
        this.btnActive[idx] = true;
        this.btnDone.fill(true, 0, idx);
        this.offBtn;
        this.activeIndex = idx;
        this.completeStep;
      } else if (idx > 4) {
        this.reset();
      }
      // когда нажимаем на определенный шаг
    },
  },
  computed: {
    offBtn() {
      return this.activeIndex >= 2;
    },
    completeStep() {
      if (this.activeIndex == 4) {
        this.completeBtn = "Завершить";
      } else this.completeBtn = "Вперед";
      this.showButton = true;
      return this.activeIndex === 4;
    },
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    // 2. выключена ли кнопка назад
    // 3. находимся ли мы на последнем шаге
  },
};

Vue.createApp(App).mount("#app");
