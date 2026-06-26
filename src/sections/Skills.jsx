import TitleCustom from "../components/title_custom";
import { skills } from "../data/projects.js";
import SkillCard from "../components/skillcard";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUp, staggerContainer } from "../components/useScrollAnimation";

function Skills() {
    const title = useScrollAnimation();
    const desc = useScrollAnimation();
    const grid = useScrollAnimation(0.05);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px 24px",
                gap: "40px",
            }}
        >
            <motion.div ref={title.ref} initial="hidden" animate={title.controls} variants={fadeUp} style={{ width: "100%" }}>
                <TitleCustom text="My Skills" />
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
                }}
            >
                A collection of technologies and tools I have worked with throughout academic, personal, and collaborative projects.
            </motion.p>

            <motion.div
                ref={grid.ref}
                initial="hidden"
                animate={grid.controls}
                variants={staggerContainer}
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "clamp(16px, 3vw, 40px)",
                    marginTop: "20px",
                    width: "100%",
                }}
            >
                {skills.map((skill) => (
                    <motion.div key={skill.name} variants={fadeUp}>
                        <SkillCard {...skill} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Skills;
