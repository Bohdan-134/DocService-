gsap.registerPlugin(ScrollTrigger);

gsap.from(".contact-info", {
    x: '-100%',
    scrollTrigger: {
        trigger: ".contact",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
    }
});

gsap.from(".contact-form__wrap", {
    x: '100%',
    scrollTrigger: {
        trigger: ".contact",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
    }
});