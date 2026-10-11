import { BriefcaseBusiness, Headphones, Terminal } from 'lucide-react';
import '../App.css';

const experiences = [
  {
    title: 'Développeur full stack',
    organization: 'Justin Construction Bâtiment (JCB)',
    period: '2025 - 2026',
    Icon: Terminal,
    achievements: [
      'Développement et maintenance d’applications web',
      'Optimisation des performances des applications et correction des bugs',
      'Mise en place de tests automatisés pour assurer la qualité du code',
    ],
  },
  {
    title: 'Assistance technique client',
    organization: 'Téléperformance',
    period: 'Déc. 2025 - Juin 2026',
    Icon: Headphones,
    achievements: [
      'Accompagnement des clients face à un problème',
      'Mise en place de solutions de sécurité',
      'Surveillance des performances système et résolution des incidents techniques',
      'Dépannage',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <div className="experience-title">
          <span className="experience-heading-icon" aria-hidden="true"><BriefcaseBusiness /></span>
          <h2>Expérience professionnelle</h2>
        </div>
        <span>02 postes</span>
      </div>

      <div className="experience-timeline">
        {experiences.map(({ title, organization, period, Icon, achievements }) => (
          <article className="experience-item" key={title}>
            <span className="experience-marker" aria-hidden="true" />
            <div className="experience-item-header">
              <div className="experience-role">
                <span className="experience-role-icon" aria-hidden="true"><Icon /></span>
                <h3>{title}</h3>
              </div>
              <span className="experience-period">{period}</span>
            </div>
            <p className="experience-organization">{organization}</p>
            <ul className="experience-achievements">
              {achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
