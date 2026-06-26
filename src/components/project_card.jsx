import TechBadge from "./tech_badge";
import { motion } from "framer-motion";

function ProjectCard({ logo, image, year, overview, technologies, website, github }) {
    return (
        <>
            <style>{`
                .proj-card {
                    display: flex;
                    flex-direction: row;
                    gap: 40px;
                    width: 100%;
                    max-width: 1500px;
                    margin: 0 auto;
                    padding: 24px;
                    border-radius: 20px;
                    background: #0E1D29;
                    align-items: center;
                    box-sizing: border-box;
                }
                .proj-card-img-wrap {
                    width: min(45%, 500px);
                    aspect-ratio: 1;
                    border-radius: 10px;
                    overflow: hidden;
                    background: linear-gradient(135deg, #040F18 0%, #16384C 100%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                }
                .proj-card-section-title { font-family: Poppins, sans-serif; font-size: clamp(16px, 1.8vw, 26px); font-weight: normal; color: #66D6EA; }
                .proj-card-text { font-size: clamp(14px, 1.5vw, 24px); }
                @media (max-width: 650px) {
                    .proj-card { flex-direction: column; }
                    .proj-card-img-wrap { width: 100%; aspect-ratio: 4/3; }
                }
            `}</style>

            <div className="proj-card">
                <div className="proj-card-img-wrap">
                    <img src={image} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>

                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "28px", minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                        <img src={logo} style={{ maxHeight: "70px", maxWidth: "50%" }} />
                        <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: "normal", fontSize: "clamp(14px, 1.4vw, 22px)", color: "#aaa" }}>{year}</h2>
                    </div>

                    <div>
                        <h3 className="proj-card-section-title">Overview</h3>
                        <p className="proj-card-text" style={{ marginTop: 6 }}>{overview}</p>
                    </div>

                    <div>
                        <h3 className="proj-card-section-title">Technologies</h3>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }}>
                            {technologies.map((tech) => <TechBadge key={tech} text={tech} />)}
                        </div>
                    </div>

                    <div>
                        <h3 className="proj-card-section-title">Links</h3>
                        <div style={{ display: "flex", gap: 12, marginTop: 6, flexWrap: "wrap" }}>
                            {website && (
                                <motion.a href={website} target="_blank" rel="noopener noreferrer"
                                    whileHover={{ background: "#02525b" }} whileTap={{ background: "#7ae5f1" }}
                                    style={{ padding: "8px 18px", border: "2px solid #6EDCFF", borderRadius: 999, background: "transparent", color: "white", textDecoration: "none", fontSize: "clamp(13px, 1.3vw, 18px)" }}>
                                    Website
                                </motion.a>
                            )}
                            {github && (
                                <motion.a href={github} target="_blank" rel="noopener noreferrer"
                                    whileHover={{ background: "#02525b" }} whileTap={{ background: "#7ae5f1" }}
                                    style={{ padding: "8px 18px", border: "2px solid #6EDCFF", borderRadius: 999, background: "transparent", color: "white", textDecoration: "none", fontSize: "clamp(13px, 1.3vw, 18px)" }}>
                                    GitHub
                                </motion.a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
