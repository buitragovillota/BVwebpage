import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapReusableCounter = () => {
  gsap.registerEffect({
    name: "counter",
    extendTimeline: true,
    defaults: {
      end: 0,
      duration: 0.5,
      ease: "power1",
      increment: 1,
    },
    effect: (targets, config) => {
      let tl = gsap.timeline();
      let num = targets[0].innerText.replace(/\,/g, "");
      targets[0].innerText = num;

      tl.to(
        targets,
        {
          duration: config.duration,
          innerText: config.end,
          modifiers: {
            innerText: function (innerText) {
              return gsap.utils
                .snap(config.increment, innerText)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
          },
          ease: config.ease,
        },
        0,
      );

      return tl;
    },
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#stats-bar",
      start: "top 70%",
      toggleActions: "play none none none",
      markers: false,
    },
  });

  tl.from("#stats-bar", {
    autoAlpha: 0,
    y: 20,
    duration: 0.4,
    ease: "power2.out",
  });
  tl.from("#stat1", { autoAlpha: 0, duration: 0.3 });
  tl.counter("#yearsCount", { end: 10, ease: "linear" }, "-=0.3");
  tl.from("#stat2", { autoAlpha: 0, duration: 0.3 }, "+=0.3");
  tl.counter(
    "#successCount",
    { end: 95, increment: 1, duration: 0.8 },
    "-=0.3",
  );
};
