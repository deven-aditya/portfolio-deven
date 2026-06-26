import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

export function useScrollAnimation(threshold = 0.15) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return { ref, controls };
}

export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};
