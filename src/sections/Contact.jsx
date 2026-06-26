import TitleCustom from "../components/title_custom";
import ButtonLogoOnly from "../components/button_logo_only";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Insta from "../assets/insta.png";
import Mail from "../assets/mail.png";
import Telephone from "../assets/telp.png";
import Location from "../assets/loc.png";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUp } from "../components/useScrollAnimation";

function ContactRow({ icon, label, value }) {
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
            <img src={icon} style={{ width: "28px", flexShrink: 0 }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: "normal", fontSize: "16px", color: "#55AFC8" }}>{label}</h3>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: "normal", fontSize: "clamp(16px, 1.8vw, 22px)", wordBreak: "break-word" }}>{value}</h3>
            </div>
        </div>
    );
}

function Contact() {
    const title = useScrollAnimation();
    const desc = useScrollAnimation();
    const card = useScrollAnimation();

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
                <TitleCustom text="Contact Me" />
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
                Feel free to reach out if you'd like to connect, collaborate, or discuss new opportunities.
            </motion.p>

            <motion.div
                ref={card.ref}
                initial="hidden"
                animate={card.controls}
                variants={fadeUp}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 40,
                    width: "min(100%, 600px)",
                    padding: "clamp(20px, 4vw, 40px)",
                    borderRadius: 20,
                    background: "#0E1D29",
                    alignItems: "flex-start",
                    boxSizing: "border-box",
                }}
            >
                <div style={{ width: "100%" }}>
                    <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: "normal", fontSize: "22px", marginBottom: 20 }}>Contact Info</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        <ContactRow icon={Mail} label="Email" value="devklt24@gmail.com" />
                        <ContactRow icon={Telephone} label="Phone Number" value="+62 822 1488 2460" />
                        <ContactRow icon={Location} label="Location" value="Klaten, Jawa Tengah, Indonesia" />
                    </div>
                </div>

                <div style={{ width: "100%" }}>
                    <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: "normal", fontSize: "22px", marginBottom: 20 }}>Social</h2>
                    <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
                        {[
                            { logo: Linkedin, href: "https://www.linkedin.com/in/deven-christian-aditya-826b97301/" },
                            { logo: Github, href: "https://github.com/deven-aditya" },
                            { logo: Insta, href: "https://www.instagram.com/devenaditya24/" },
                        ].map(({ logo, href }) => (
                            <div key={href} style={{ height: "65px" }}>
                                <ButtonLogoOnly logo={logo} href={href} />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;
