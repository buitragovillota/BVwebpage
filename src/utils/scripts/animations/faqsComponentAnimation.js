import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function faqsComponentAnimation() {
    const faqs = document.querySelector("#faqs");
    if (!faqs) return;

    const header = gsap.utils.toArray(
        faqs.querySelectorAll(".header-section > *"),
    );
    const faqItems = gsap.utils.toArray(faqs.querySelectorAll("details"));
    if (!header.length || !faqItems.length) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([...header, ...faqItems], { autoAlpha: 1 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: faqs,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power3.out", duration: 0.8 },
        });

        tl.fromTo(
            header,
            { autoAlpha: 0 },
            { autoAlpha: 1, stagger: 0.2 },
        ).fromTo(
            faqItems,
            { y: 50, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, stagger: 0.3 },
            "-=0.4",
        );

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    });
}
