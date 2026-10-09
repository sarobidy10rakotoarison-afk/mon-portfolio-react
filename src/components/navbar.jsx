import "../App.css";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#accueil" className="logo">
                nafra.dev
            </a>

            <ul className="nav-links">
                <li>
                    <a href="#accueil">Accueil</a>
                </li>
                <li>
                    <a href="#projets">Projets</a>
                </li>
                <li>
                    <a href="#competences">Compétences</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;