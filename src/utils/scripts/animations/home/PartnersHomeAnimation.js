import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initPartnersHomeAnimation() {
    const sections = document.querySelector(".partners-section");
    if (!sections) return;

    const leftColumn = sections.querySelector(".left-column");
    const rightColumn = sections.querySelector(".right-column");

    if (!leftColumn || !rightColumn) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([leftColumn, rightColumn], { autoAlpha: 1 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: leftColumn,
                start: "top 50%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power3.out", duration: 0.8 },
        });

        tl.from(leftColumn, { xPercent: -100, autoAlpha: 0 });
        tl.from(rightColumn, { xPercent: 100, autoAlpha: 0 }, "<");

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    });
}
