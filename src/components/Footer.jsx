import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) controls.start({ opacity: 1, y: 0 });
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 1, y: 0 }}
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h2
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "normal",
                    fontSize: "clamp(13px, 2vw, 22px)",
                    color: "#224C61",
                    padding: "0 16px",
                    textAlign: "center",
                }}
            >© 2026 Deven Christian Aditya. All rights reserved.</h2>
        </motion.div>
    )
}

export default Footer;
