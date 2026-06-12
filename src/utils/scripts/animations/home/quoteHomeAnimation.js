import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function quoteHomeAnimation() {
    const heading = document.querySelector("#quote-heading");
    const subtitle = document.querySelector("#quote-subtitle");
    if (!heading || !subtitle) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([heading, subtitle], { autoAlpha: 1 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heading,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power3.out", duration: 1 },
        });

        tl.fromTo(
            heading,
            { y: 50, autoAlpha: 0 },
            { y: 0, autoAlpha: 1 },
        ).fromTo(
            subtitle,
            { y: 30, autoAlpha: 0 },
            { y: 0, autoAlpha: 1 },
            "-=0.7",
        );

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    });
}