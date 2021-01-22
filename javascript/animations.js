gsap.from('.current-project', {duration: 3, x: -700, opacity: 0, scale: 0.1, delay: 7});

const tl = gsap.timeline({defaults: { ease: "power1.out"} });

tl.to('.text', {y: "0%", duration: 1, stagger: 0.3, delay: 0.5});
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 1.0}), "-=1.0" ;
tl.to('.intro', {y: "-100%", duration: 1.0}, "-=1.0");


tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 2.0}, "-=1.0");
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 3.0}, "-=0.5");
tl.fromTo('.smaller-text', {opacity: 0}, {opacity: 1, duration: 5.0}, "-=1.5") ;





