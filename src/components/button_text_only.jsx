import { motion } from "framer-motion";

function ButtonTextOnly({ title, destination }) {
    
    const handleClick = () => {
        const element = document.getElementById(destination);

        if(element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    
    return (
        <motion.button
            whileHover={{
                background: "#02525b"
            }}

            whileTap={{
                background: "#7ae5f1"
            }}

            onClick={handleClick}

            style={{
                padding: "10px 20px",
                borderRadius: "100px",
                border: "3px solid #9DEDFB",
                minWidth: "clamp(160px, 16vw, 270px)",
                background: "transparent",
                color: "#FFFFFF",
                fontSize: "clamp(16px, 1.6vw, 25px)",
                cursor: "pointer",
            }}
        >
            {title}
        </motion.button>
    );
}

export default ButtonTextOnly;