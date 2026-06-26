function ExperienceCard({ image, title, company, description, date }) {
    return (
        <>
            <style>{`
                .exp-card {
                    display: flex;
                    flex-direction: row;
                    gap: 30px;
                    width: 100%;
                    max-width: 1500px;
                    margin: 0 auto;
                    padding: 24px;
                    border-radius: 20px;
                    background: #0E1D29;
                    align-items: center;
                    box-sizing: border-box;
                }
                .exp-card-img-wrap {
                    width: 280px;
                    min-width: 180px;
                    height: 165px;
                    border-radius: 10px;
                    overflow: hidden;
                    background: linear-gradient(135deg, #040F18 0%, #16384C 100%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                }
                .exp-card-title { font-size: clamp(18px, 2vw, 28px); font-family: Poppins, sans-serif; font-weight: normal; }
                .exp-card-company { font-size: clamp(14px, 1.5vw, 20px); font-family: Poppins, sans-serif; font-weight: normal; color: #6DC0D5; }
                .exp-card-date { font-size: clamp(13px, 1.2vw, 18px); font-family: Poppins, sans-serif; font-weight: normal; color: #2A5D74; white-space: nowrap; }
                .exp-card-desc { font-size: clamp(14px, 1.5vw, 22px); font-family: Poppins, sans-serif; font-weight: normal; }
                @media (max-width: 600px) {
                    .exp-card { flex-direction: column; }
                    .exp-card-img-wrap { width: 100%; height: 140px; min-width: unset; }
                }
            `}</style>

            <div className="exp-card">
                <div className="exp-card-img-wrap">
                    <img src={image} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
                </div>

                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 12 }}>
                        <div>
                            <h2 className="exp-card-title">{title}</h2>
                            <h3 className="exp-card-company">{company}</h3>
                        </div>
                        <h2 className="exp-card-date">{date}</h2>
                    </div>
                    <h3 className="exp-card-desc">{description}</h3>
                </div>
            </div>
        </>
    );
}

export default ExperienceCard;
