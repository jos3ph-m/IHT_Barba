import barba from "@barba/core";
import barbaCss from "@barba/css";

// tell Barba to use the css plugin
barba.use(barbaCss);

// init Barba - with the css plugin, once() hook will not run
barba.init({
  transitions: [
    {
      beforeOnce() {
        console.log("beforeOnce");
      },
      once() {
        console.log("once");
      },
      afterOnce() {
        console.log("afterOnce");
      },
    },
  ],
});
