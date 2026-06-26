function TitleCustom({ text }) {
    return (
        <div
            style={{
                display: "flex",
                margin: "10px 0",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(45deg, #51ADC6 0%, #BAF5FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
            }}
        >
            <h1 style={{ fontSize: "clamp(32px, 5vw, 65px)", fontWeight: "700", textAlign: "center" }}>
                {text}
            </h1>
        </div>
    );
}

export default TitleCustom;
