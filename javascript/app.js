function splitScroll() {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: '200%',
    triggerElement: '.projects-title',
    triggerHook: 0
  })
    .setPin('.projects-title')
    .addIndicators()
    .addTo(controller);
}

splitScroll();
