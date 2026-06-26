import { motion } from "framer-motion";

function ButtonLogoOnly({ logo, href }) {
    return (
        <motion.button
            whileHover={{
                background: "#02525b"
            }}

            whileTap={{
                background: "#7ae5f1"
            }}

            style={{
                padding: "10px",
                borderRadius: "100px",
                border: "4px solid #9DEDFB",
                minWidth: "75px",
                height: "100%",
                background: "transparent",
                color: "#FFFFFF",
                fontSize: "30px",
            }}
            
        >
            <div>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img 
                        height={30}
                        src={logo}
                    />
                </a>
                
            </div>
            

        </motion.button>
    )
}

export default ButtonLogoOnly;