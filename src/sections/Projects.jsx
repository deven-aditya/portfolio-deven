import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/project_card";
import TitleCustom from "../components/title_custom";
import { AnimatePresence, motion } from "framer-motion";
import PrevButton from "../assets/prev.png";
import NextButton from "../assets/next.png";
import { useScrollAnimation, fadeUp } from "../components/useScrollAnimation";

function Projects() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const title = useScrollAnimation();
    const desc = useScrollAnimation();
    const carousel = useScrollAnimation(0.05);

    const nextProject = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % projects.length);
    };
    const prevProject = () => {
        setDirection(-1);
        setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px 24px",
            }}
        >
            <motion.div ref={title.ref} initial="hidden" animate={title.controls} variants={fadeUp} style={{ width: "100%" }}>
                <TitleCustom text="My Recent Projects" />
            </motion.div>

            <motion.p
                ref={desc.ref}
                initial="hidden"
                animate={desc.controls}
                variants={fadeUp}
                style={{
                    width: "min(90%, 1000px)",
                    fontSize: "clamp(15px, 1.8vw, 28px)",
                    lineHeight: "1.6",
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "20px",
                }}
            >
                Some of the projects I've recently worked on, highlighting my passion for building meaningful digital solutions.
            </motion.p>

            <motion.div
                ref={carousel.ref}
                initial="hidden"
                animate={carousel.controls}
                variants={fadeUp}
                style={{ width: "100%", marginTop: "30px" }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "clamp(8px, 2vw, 50px)",
                        width: "100%",
                    }}
                >
                    <motion.button
                        onClick={prevProject}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ width: 44, height: 44, background: "transparent", border: "none", padding: 0, cursor: "pointer", flexShrink: 0 }}
                    >
                        <img src={PrevButton} alt="Previous" style={{ width: "100%", height: "100%" }} />
                    </motion.button>

                    <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ x: 100 * direction, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -100 * direction, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <ProjectCard {...projects[current]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.button
                        onClick={nextProject}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ width: 44, height: 44, background: "transparent", border: "none", padding: 0, cursor: "pointer", flexShrink: 0 }}
                    >
                        <img src={NextButton} alt="Next" style={{ width: "100%", height: "100%" }} />
                    </motion.button>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 30 }}>
                    {projects.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            style={{
                                width: current === index ? 30 : 10,
                                height: 10,
                                borderRadius: 20,
                                background: current === index ? "#67DFFF" : "#7CCFE644",
                                transition: ".3s",
                                cursor: "pointer",
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Projects;
