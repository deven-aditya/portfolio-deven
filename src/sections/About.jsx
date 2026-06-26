import TitleCustom from "../components/title_custom";
import { motion } from "framer-motion";
import OverviewBreak from "../assets/overview_break.png";
import OverviewPoint from "../assets/overview_point.png";
import { useScrollAnimation, fadeUp, fadeLeft, fadeRight, fadeIn } from "../components/useScrollAnimation";

function About() {
    const title = useScrollAnimation();
    const desc = useScrollAnimation();
    const overview = useScrollAnimation();
    const left = useScrollAnimation();
    const right = useScrollAnimation();

    return (
        <>
            <style>{`
                .overview-heading { color: #66D6EA; font-size: clamp(22px, 3.5vw, 45px); }
                .overview-text { font-size: clamp(13px, 1.5vw, 22px); width: 60%; padding-left: 40px; margin-top: 6px; }
                .overview-list { font-size: clamp(13px, 1.5vw, 22px); padding-left: 60px; margin-top: 6px; }

                /* Desktop layout: image + absolute positioned text */
                .about-desktop { width: 80%; position: relative; display: block; }
                .about-desktop-img { width: 100%; display: block; }
                .about-desktop-left { position: absolute; top: 20%; left: 18%; color: white; }
                .about-desktop-right { position: absolute; top: 20%; right: 18%; color: white; }

                /* Mobile layout: stacked cards */
                .about-mobile { display: none; flex-direction: column; gap: 32px; width: 100%; padding: 0 24px; box-sizing: border-box; color: white; }

                @media (max-width: 768px) {
                    .about-desktop { display: none; }
                    .about-mobile { display: flex; }
                    .overview-text { width: 100%; padding-left: 20px; }
                    .overview-list { padding-left: 36px; }
                }
            `}</style>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#040F18", gap: "50px", padding: "60px 0" }}>

                <motion.div ref={title.ref} initial="hidden" animate={title.controls} variants={fadeUp} style={{ width: "100%" }}>
                    <TitleCustom text="About Myself" />
                </motion.div>

                <motion.p
                    ref={desc.ref} initial="hidden" animate={desc.controls} variants={fadeUp}
                    style={{ width: "min(90%, 900px)", fontSize: "clamp(15px, 1.6vw, 26px)", lineHeight: 1.6, color: "#fff", textAlign: "center" }}
                >
                    I am an Informatics student at Atma Jaya Yogyakarta University with a strong interest in software development and technology. Throughout my academic journey, I have worked on various web and mobile application projects that have helped me strengthen both my technical and problem-solving skills.
                </motion.p>

                <motion.div ref={overview.ref} initial="hidden" animate={overview.controls} variants={fadeIn}>
                    <h2 style={{ fontSize: "clamp(20px, 2.2vw, 35px)", fontFamily: "Poppins, sans-serif", fontWeight: "normal" }}>Overview</h2>
                </motion.div>

                {/* Desktop: image with overlaid text */}
                <div className="about-desktop">
                    <img src={OverviewBreak} className="about-desktop-img" />

                    <motion.div ref={left.ref} initial="hidden" animate={left.controls} variants={fadeLeft} className="about-desktop-left">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={OverviewPoint} />
                            <h3 className="overview-heading">Education</h3>
                        </div>
                        <p className="overview-text">Currently studying Informatics Engineering at Atma Jaya Yogyakarta University</p>
                    </motion.div>

                    <motion.div ref={right.ref} initial="hidden" animate={right.controls} variants={fadeRight} className="about-desktop-right">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={OverviewPoint} />
                            <h3 className="overview-heading">Interests</h3>
                        </div>
                        <ul className="overview-list">
                            <li>Web Development</li>
                            <li>Mobile Development</li>
                            <li>UI/UX Design</li>
                            <li>Graphic Design</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Mobile: stacked cards */}
                <div className="about-mobile">
                    <motion.div initial="hidden" animate={left.controls} variants={fadeUp}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#0E1D29", padding: 20, borderRadius: 14 }}>
                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <img src={OverviewPoint} style={{ height: 26 }} />
                                    <h3 className="overview-heading">Education</h3>
                                </div>
                                <p className="overview-text">Currently studying Informatics Engineering at Atma Jaya Yogyakarta University</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" animate={right.controls} variants={fadeUp}>
                        <div style={{ background: "#0E1D29", padding: 20, borderRadius: 14 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <img src={OverviewPoint} style={{ height: 26 }} />
                                <h3 className="overview-heading">Interests</h3>
                            </div>
                            <ul className="overview-list">
                                <li>Web Development</li>
                                <li>Mobile Development</li>
                                <li>UI/UX Design</li>
                                <li>Graphic Design</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

            </div>
        </>
    );
}

export default About;
