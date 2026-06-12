import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function practiceAreasAnimation() {
    const grid = document.querySelector("#practice-areas");
    if (!grid) return;

    const cards = gsap.utils.toArray(grid.querySelectorAll(".practice-card"));
    if (!cards.length) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(cards, { autoAlpha: 1 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: grid,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power3.out", duration: 0.8 },
        });

        tl.fromTo(
            cards,
            { y: 50, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, stagger: 0.30 },
        );

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    });
}
