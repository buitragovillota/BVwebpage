import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const contactSectionAnimation = () => {
    const contactSection = document.querySelector(".contact-section");
    const leftContent = document.querySelector(".left-content");
    const rightContent = document.querySelector(".right-form");

    if (!contactSection) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([leftContent, rightContent], { autoAlpha: 1 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contactSection,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out", duration: 0.8 },
        });

        tl.from(leftContent, { xPercent: -100, autoAlpha: 0 });
        tl.from(rightContent, { xPercent: 100, autoAlpha: 0 }, "<");

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    });
};