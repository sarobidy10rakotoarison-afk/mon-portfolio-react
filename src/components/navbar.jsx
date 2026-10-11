import "../App.css";
import { useState } from "react";
import { ChevronRight, Menu, Minus, X } from "lucide-react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar" onKeyDown={(event) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        }}>
            <a href="#accueil" className="logo">
                <span className="logo-mark" aria-hidden="true">
                    <ChevronRight />
                    <Minus />
                </span>
                nafra.dev
            </a>

            <button
                className="menu-toggle"
                type="button"
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isMenuOpen}
                aria-controls="primary-navigation"
                onClick={() => setIsMenuOpen((open) => !open)}
            >
                {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>

            <ul id="primary-navigation" className={`nav-links${isMenuOpen ? " nav-links-open" : ""}`}>
                <li>
                    <a href="#accueil" onClick={() => setIsMenuOpen(false)}>Accueil</a>
                </li>
                <li>
                    <a href="#projets" onClick={() => setIsMenuOpen(false)}>Projets</a>
                </li>
                <li>
                    <a href="#experience" onClick={() => setIsMenuOpen(false)}>Expérience</a>
                </li>
                <li>
                    <a href="#competences" onClick={() => setIsMenuOpen(false)}>Compétences</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;