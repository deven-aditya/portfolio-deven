import { motion } from "framer-motion";

function SkillCard({ icon: Icon, name }) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: { y: 0, scale: 1 },
                hover: { y: -8, scale: 1.05 },
            }}
            transition={{ duration: 0.25 }}
            style={{
                width: "clamp(120px, 12vw, 170px)",
                height: "clamp(120px, 12vw, 170px)",
                borderRadius: 18,
                background: "#0F1F2E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
            }}
        >
            <motion.div
                variants={{ rest: { opacity: 1, scale: 1 }, hover: { opacity: 0, scale: 0.8 } }}
            >
                <Icon size={60} color="white" />
            </motion.div>

            <motion.div
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                transition={{ duration: 0.25 }}
                style={{
                    position: "absolute", inset: 0, backdropFilter: "blur(12px)",
                    background: "rgba(4,15,24,0.8)", display: "flex", flexDirection: "column",
                    justifyContent: "center", alignItems: "center", textAlign: "center", padding: 16,
                }}
            >
                <h3 style={{ margin: 0, color: "#67DFFF", fontSize: "clamp(12px, 1.2vw, 18px)" }}>{name}</h3>
            </motion.div>
        </motion.div>
    );
}

export default SkillCard;
