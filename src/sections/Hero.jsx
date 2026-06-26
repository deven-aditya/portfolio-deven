import { motion } from "framer-motion";
import profile from "../assets/foto_deven.png";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Insta from "../assets/insta.png";
import ButtonTextOnly from "../components/button_text_only";
import ButtonLogoOnly from "../components/button_logo_only";

function Hero() {
    return (
        <>
            <style>{`
                .hero-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    min-height: 100vh;
                    max-width: 1800px;
                    margin: 0 auto;
                    padding: 100px 60px 40px;
                    gap: 40px;
                }
                .hero-text { flex: 1; display: flex; flex-direction: column; gap: 12px; }
                .hero-title { font-size: clamp(40px, 6vw, 72px); line-height: 1; font-weight: 700; background: linear-gradient(45deg, #51ADC6 0%, #BAF5FF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: transparent; margin: 12px 0; }
                .hero-greeting { font-size: clamp(20px, 2.5vw, 40px); color: #fff; }
                .hero-desc { font-size: clamp(15px, 1.6vw, 25px); line-height: 1.6; color: #fff; max-width: 6000px; }
                .hero-img img { max-height: min(60vw, 680px); width: auto; display: block; }
                .hero-buttons { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-top: 8px; }
                @media (max-width: 768px) {
                    .hero-container { flex-direction: column-reverse; padding: 90px 24px 40px; text-align: center; align-items: center; }
                    .hero-desc { max-width: 100%; }
                    .hero-img img { max-height: 280px; }
                    .hero-buttons { justify-content: center; }
                    .hero-title { font-size: clamp(32px, 8vw, 52px); }
                }
            `}</style>

            <div className="hero-container">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className="hero-greeting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        I am Deven
                    </motion.p>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Software Developer
                        <br />
                        Student
                    </motion.h1>

                    <motion.p
                        className="hero-desc"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Passionate about software development and creating intuitive digital
                        experiences, with experience in web and mobile application development.
                    </motion.p>

                    <div className="hero-buttons">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                            <ButtonTextOnly title="Contact Me" destination="contact" />
                        </motion.div>
                        {[
                            { logo: Linkedin, href: "https://www.linkedin.com/in/deven-christian-aditya-826b97301/" },
                            { logo: Github, href: "https://github.com/deven-aditya" },
                            { logo: Insta, href: "https://www.instagram.com/devenaditya24/" },
                        ].map(({ logo, href }, i) => (
                            <motion.div
                                key={href}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                                style={{ height: "65px" }}
                            >
                                <ButtonLogoOnly logo={logo} href={href} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="hero-img">
                    <motion.img
                        src={profile}
                        alt="Profile"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    />
                </div>
            </div>
        </>
    );
}

export default Hero;
