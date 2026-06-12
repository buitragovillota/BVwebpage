import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const foundersAnimation = () => {
    const founder1Image = document.querySelector(".founder1-image");
    const founder1Content = document.querySelector(".founder1-content");
    const founder2Image = document.querySelector(".founder2-image");
    const founder2Content = document.querySelector(".founder2-content");

    if (!founder1Image || !founder1Content || !founder2Image || !founder2Content) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
            [founder1Image, founder1Content, founder2Image, founder2Content],
            { autoAlpha: 1 },
        );
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: founder1Image,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out", duration: 0.8 },
        });

        tl1.fromTo(
            [founder1Image, founder1Content],
            { autoAlpha: 0 },
            { autoAlpha: 1, stagger: 0.3 },
        );

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: founder2Image,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out", duration: 0.8 },
        });

        tl2.fromTo(
            [founder2Image, founder2Content],
            { autoAlpha: 0 },
            { autoAlpha: 1, stagger: 0.3 },
        );

        return () => {
            tl1.scrollTrigger?.kill();
            tl1.kill();
            tl2.scrollTrigger?.kill();
            tl2.kill();
        };
    });
};
