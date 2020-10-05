import barba from '@barba/core';
import barbaCss from '@barba/css';

// tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body');

// global hook running before any transitions
barba.hooks.before((data) => {
  const background = data.current.container.dataset.background;
  body.style.setProperty('--page-background', background);
});

// init Barba - with the css plugin, once() hook will not run
barba.init({
  transitions: [
    {
      beforeOnce() {
        console.log('beforeOnce');
      },
      once() {
        console.log('once');
      },
      afterOnce() {
        console.log('afterOnce');
      },
    },
    {
      name: 'fade',
      to: {
        namespace: ['fade'],
      },
      leave() {},
      enter() {},
    },
    {
      name: 'clip',
      to: {
        namespace: ['clip'],
      },
      leave() {},
      enter() {},
    },
  ],
});
