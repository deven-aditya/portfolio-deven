import { useState } from "react";

function Navbar({ activeSection, onNavClick }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const menus = ["about", "skills", "projects", "experiences", "contact"];

    const handleClick = (menu) => {
        onNavClick(menu);
        setMenuOpen(false);
    };

    const linkStyle = (menu) => ({
        padding: "10px 18px",
        borderRadius: "8px",
        textDecoration: "none",
        color: "white",
        background:
            activeSection === menu
                ? "linear-gradient(90deg, #3E849E, #0E1E2B)"
                : "transparent",
        transition: "background 0.3s",
        cursor: "pointer",
        fontSize: "clamp(14px, 1.5vw, 22px)",
        whiteSpace: "nowrap",
    });

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "70px",
                background: "#0E1E2B",
                opacity: "0.95",
                zIndex: 1000,
                padding: "0 24px",
                boxSizing: "border-box",
            }}
        >
            <a
                href="#home"
                onClick={() => handleClick("")}
                style={{ textDecoration: "none", color: "white", flexShrink: 0 }}
            >
                <h2
                    style={{
                        fontSize: "clamp(18px, 2.5vw, 30px)",
                        fontFamily: "Poppins, sans-serif",
                        fontStyle: "italic",
                        fontWeight: "normal",
                    }}
                >
                    Deven's Portfolio
                </h2>
            </a>

            <div
                className="nav-desktop"
                style={{
                    display: "flex",
                    gap: "clamp(8px, 2vw, 40px)",
                    alignItems: "center",
                }}
            >
                {menus.map((menu) => (
                    <a
                        key={menu}
                        href={`#${menu}`}
                        onClick={() => handleClick(menu)}
                        style={linkStyle(menu)}
                    >
                        {menu.charAt(0).toUpperCase() + menu.slice(1)}
                    </a>
                ))}
            </div>

            <button
                className="nav-hamburger"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                style={{
                    display: "none",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 8,
                    flexDirection: "column",
                    gap: 5,
                }}
            >
                {[0, 1, 2].map((i) => (
                    <span
                        key={i}
                        style={{
                            display: "block",
                            width: 24,
                            height: 2,
                            background: "white",
                            borderRadius: 2,
                            transition: "0.3s",
                            transform:
                                menuOpen
                                    ? i === 0
                                        ? "translateY(7px) rotate(45deg)"
                                        : i === 2
                                        ? "translateY(-7px) rotate(-45deg)"
                                        : "opacity(0) scaleX(0)"
                                    : "none",
                            opacity: menuOpen && i === 1 ? 0 : 1,
                        }}
                    />
                ))}
            </button>

            {menuOpen && (
                <div
                    className="nav-mobile-menu"
                    style={{
                        position: "fixed",
                        top: 70,
                        left: 0,
                        width: "100%",
                        background: "#0E1E2Bf5",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                        padding: "12px 0 20px",
                        zIndex: 999,
                    }}
                >
                    {menus.map((menu) => (
                        <a
                            key={menu}
                            href={`#${menu}`}
                            onClick={() => handleClick(menu)}
                            style={{
                                ...linkStyle(menu),
                                fontSize: "18px",
                                width: "80%",
                                textAlign: "center",
                                padding: "14px 18px",
                            }}
                        >
                            {menu.charAt(0).toUpperCase() + menu.slice(1)}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .nav-desktop { display: none !important; }
                    .nav-hamburger { display: flex !important; }
                }
            `}</style>
        </nav>
    );
}

export default Navbar;
