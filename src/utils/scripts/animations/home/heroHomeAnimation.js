import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const heroHomeAnimation = () => {
  const heading = document.querySelector("#hero-heading");
  const subtitle = document.querySelector("#hero-subtitle");
  const cta = document.querySelector("#hero-cta");
  if (!heading || !subtitle || !cta) return;

  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: reduce)", () => {
    gsap.set([heading, subtitle, cta], { autoAlpha: 1 });
  });

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const headingSplit = SplitText.create(heading, {
      type: "words, chars",
      aria: "auto",
      autoSplit: true,
      onSplit(self) {
        gsap.set(heading, { autoAlpha: 1 });
        return gsap.from(self.words, {
          yPercent: 110,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        });
      },
    });

    const subtitleSplit = SplitText.create(subtitle, {
      type: "lines",
      mask: "lines",
      aria: "auto",
      autoSplit: true,
      onSplit(self) {
        gsap.set(subtitle, { autoAlpha: 1 });
        return gsap.from(self.lines, {
          yPercent: 110,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.6,
        });
      },
    });

    const ctaTween = gsap.fromTo(
      cta,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
    );

    return () => {
      headingSplit.revert();
      subtitleSplit.revert();
      ctaTween.revert();
    };
  });
};
