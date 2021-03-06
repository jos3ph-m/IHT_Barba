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
      name: 'home',
      to: {
        namespace: ['home'],
      },
      sync: true,
      once() {},
      leave() {},
      enter() {},
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
      sync: true,
      to: {
        namespace: ['clip'],
      },
      leave() {},
      enter() {},
    },
    {
      name: 'with-cover',
      to: {
        namespace: ['with-cover'],
      },
      leave() {},
      enter() {},
    },
  ],
});
