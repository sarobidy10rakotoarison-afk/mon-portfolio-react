function Projets() {
    return (
        <section id="projets" className="projects-section">
            <div className="projects-header">
                <h2>Projets récents</h2>
                <span>02 réalisations</span>
            </div>

            <div className="projects-grid">
                <article className="project-card project-card-featured">
                    <div className="project-content">
                        <p className="project-type">Application métier</p>
                        <h3>AnalyserWeb</h3>
                        <p className="project-description">
                            Système de gestion de production et de stock pour un atelier de
                            fabrication. Génération automatique d’analyses de production,
                            contrôle d’accès par rôle et suivi d’historique en temps réel.
                        </p>

                        <div className="project-technologies" aria-label="Technologies utilisées">
                            <span>React</span>
                            <span>Node.js / Express</span>
                            <span>MySQL</span>
                            <span>JWT</span>
                        </div>

                        <div className="project-roles" aria-label="Rôles gérés">
                            <span>Responsable</span>
                            <span>Gestion stock</span>
                            <span>Production</span>
                            <span>Admin</span>
                        </div>
                    </div>
                </article>

                <article className="project-card project-card-next">
                    <p className="project-type">À venir</p>
                    <h3>Prochain projet</h3>
                    <p>Cet emplacement attend ta prochaine réalisation.</p>
                </article>
            </div>
        </section>
    );
}

export default Projets;