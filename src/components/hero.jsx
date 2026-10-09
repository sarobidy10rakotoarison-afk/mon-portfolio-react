import "../App.css";

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
                    </a>
                    <a className="button button-secondary" href="#contact">
                        Me contacter
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;