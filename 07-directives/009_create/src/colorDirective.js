let interval;
let defaultcolor;
let mouseover = (event) => {
  event.target.style.color = "red";
};

let mouseout = (event) => {
  event.target.style.color = defaultcolor;
};

export default {
  mounted(el, binding) {
    /*     console.log(el);
    console.log(binding); */
    el.style[binding.arg] = binding.value;
    if (binding.modifiers.blink) {
      let flag = true;
      interval = setInterval(() => {
        el.style.color = flag == true ? "white" : binding.value;
        flag = !flag;
      }, 500);
      defaultcolor = binding.value;
    }
    if (binding.modifiers.hover) {
      el.addEventListener("mouseover", mouseover);
      el.addEventListener("mouseout", mouseout);
    }
  },
  updated(el, binding) {
    /*     console.log(el);
    console.log(binding); */
    el.style[binding.arg] = binding.value;
  },
  unmounted(el) {
    console.log("unmounted");
    if (interval) {
      clearInterval(interval);
    }
    el.removeEventListener("mouseover", mouseover);
    el.removeEventListener("mouseout", mouseout);
  },
};
