import '../App.css';

function Skills() {
  const skills = [
    {
      title: 'React',
      description: 'Interfaces et état applicatif',
    },
    {
      title: 'Node',
      description: 'API REST avec Express',
    },
    {
      title: 'SQL',
      description: 'Modélisation MySQL / MariaDB',
    },
  ];

  return (
    <section id="competences" className="skills-section">
      <div className="skills-header">
        <h2>Compétences</h2>
        <span>stack principale</span>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.title} className="skill-card">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;