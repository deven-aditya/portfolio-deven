import ExperienceCard from "../components/experience_card";
import TitleCustom from "../components/title_custom";
import { experiences } from "../data/projects";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUp, staggerContainer } from "../components/useScrollAnimation";

function Experience() {
    const title = useScrollAnimation();
    const desc = useScrollAnimation();
    const list = useScrollAnimation(0.05);

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
                <TitleCustom text="My Experiences" />
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
                    margin: "20px 0 30px",
                }}
            >
                Experiences that have helped me develop technical expertise, leadership, teamwork, and problem-solving skills.
            </motion.p>

            <motion.div
                ref={list.ref}
                initial="hidden"
                animate={list.controls}
                variants={staggerContainer}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "clamp(24px, 3vw, 50px)",
                    width: "100%",
                }}
            >
                {experiences.map((experience, index) => (
                    <motion.div key={index} variants={fadeUp} style={{ width: "100%" }}>
                        <ExperienceCard {...experience} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Experience;
