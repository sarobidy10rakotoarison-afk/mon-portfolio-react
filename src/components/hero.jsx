import "../App.css";
import { ArrowRight, Database, Mail, PanelsTopLeft, Server, ShieldCheck } from "lucide-react";

function Hero() {
    return (
        <section id="accueil" className="hero">
            <div className="hero-content">
                <p className="hero-status">
                    <span className="status-dot" aria-hidden="true" />
                    Disponible pour de nouvelles opportunités
                </p>

                <h1>
                    Développeur full-stack qui
                    <br />
                    transforme des <span className="text-gradient">problèmes</span>
                    <br />
                    <span className="text-gradient text-gradient-alt">métier</span> en outils fiables
                </h1>

                <p className="hero-description">
                    Je conçois et développe des applications web de bout en bout — de la base de
                    données à l’interface — avec une attention particulière portée à la sécurité et
                    à l’expérience utilisateur.
                </p>

                <div className="hero-actions">
                    <a className="button button-primary" href="#projets">
                        Voir mes projets
                        <ArrowRight className="button-icon" aria-hidden="true" />
                    </a>
                    <a className="button button-secondary" href="#contact">
                        <Mail className="button-icon button-icon-mail" aria-hidden="true" />
                        Me contacter
                    </a>
                </div>

                <ul className="hero-stack" aria-label="Technologies et domaines de compétence">
                    <li><span className="stack-icon" aria-hidden="true"><PanelsTopLeft /></span>Front-end React</li>
                    <li><span className="stack-icon stack-icon-server" aria-hidden="true"><Server /></span>API Node.js</li>
                    <li><span className="stack-icon stack-icon-database" aria-hidden="true"><Database /></span>Bases de données</li>
                    <li><span className="stack-icon" aria-hidden="true"><ShieldCheck /></span>Sécurité</li>
                </ul>
            </div>
        </section>
    );
}

export default Hero;  