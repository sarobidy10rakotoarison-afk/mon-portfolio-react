import { ChevronRight, CodeXml, Link, Mail, MessageCircle, Minus, Phone } from "lucide-react";
import "../App.css";

const footerLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "Projets", href: "#projets" },
    { label: "Expérience", href: "#experience" },
    { label: "Compétences", href: "#competences" },
    { label: "Contact", href: "#contact" },
];

const footerContacts = [
    { label: "Email", value: "sarobidy10rakotoarison@gmail.com", href: "mailto:sarobidy10rakotoarison@gmail.com", Icon: Mail },
    { label: "Téléphone", value: "+261 32 511 82", href: "tel:+2613251182", Icon: Phone },
    { label: "WhatsApp", value: "+261 32 347 15", href: "https://wa.me/2613234715", Icon: MessageCircle, external: true },
    { label: "LinkedIn", value: "linkedin.com/in/sarobidy10rakotoarison", href: "https://www.linkedin.com/in/sarobidy10rakotoarison", Icon: Link, external: true },
    { label: "GitHub", value: "github.com/sarobidy10rakotoarison", href: "https://github.com/sarobidy10rakotoarison", Icon: CodeXml, external: true },
];

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-main">
                    <div className="footer-brand">
                        <a href="#accueil" className="logo">
                            <span className="logo-mark" aria-hidden="true">
                                <ChevronRight />
                                <Minus />
                            </span>
                            nafra.dev
                        </a>
                        <p>Développeur full-stack</p>
                    </div>

                    <nav className="footer-navigation" aria-label="Navigation de pied de page">
                        <h2>Navigation</h2>
                        <ul>
                            {footerLinks.map(({ label, href }) => (
                                <li key={label}><a href={href}>{label}</a></li>
                            ))}
                        </ul>
                    </nav>

                    <div className="footer-contacts">
                        <h2>Coordonnées</h2>
                        <ul>
                            {footerContacts.map(({ label, value, href, Icon, external }) => (
                                <li key={label}>
                                    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                                        <Icon aria-hidden="true" />
                                        <span><span className="footer-contact-label">{label}</span>{value}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} nafra.dev</span>
                    <a href="#accueil">Retour en haut ↑</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;