function TechBadge({ text }) {
    return (
        <div
            style={{
                padding: "8px 18px",
                border: "2px solid #6EDCFF",
                borderRadius: 999,
                color: "white",
            }}
        >
            {text}
        </div>
    );
}

export default TechBadge;