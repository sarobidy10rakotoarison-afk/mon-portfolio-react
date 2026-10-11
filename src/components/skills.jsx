import '../App.css';
import { CircleCheck, Cpu, Database, Headphones, LockKeyhole, PanelsTopLeft, Server } from 'lucide-react';

function Skills() {
  const skills = [
    {
      title: 'React',
      description: 'Interfaces et état applicatif',
      Icon: PanelsTopLeft,
    },
    {
      title: 'Node',
      description: 'API REST avec Express',
      Icon: Server,
    },
    {
      title: 'SQL',
      description: 'Modélisation MySQL / MariaDB',
      Icon: Database,
    },
    {
      title: 'Sécurité',
      description: 'Authentification JWT et rôles',
      Icon: LockKeyhole,
    },
    {
      title: 'Tests',
      description: 'Tests automatisés et qualité du code',
      Icon: CircleCheck,
    },
    {
      title: 'Support',
      description: 'Assistance technique et dépannage',
      Icon: Headphones,
    },
  ];

  return (
    <section id="competences" className="skills-section">
      <div className="skills-header">
        <div className="skills-title">
          <span className="skills-heading-icon" aria-hidden="true"><Cpu /></span>
          <h2>Compétences</h2>
        </div>
        <span>stack principale</span>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.title} className="skill-card">
            <span className="skill-icon" aria-hidden="true"><skill.Icon /></span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;