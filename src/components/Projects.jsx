const projects = [
  {
    title: 'TEKNOFEST Robotaxi · ROTA',
    text: 'Software for an autonomous taxi built with ROS 2 as part of the ROTA team.',
  },
  {
    title: 'ieee-hub',
    text: 'This is our TechOps Project.',
    link: 'https://github.com/goktug01-dev/ieee-hub',
  },
  {
    title: 'HutbeSunumAsistani',
    text: 'This project is gift to my father.',
    link: 'https://github.com/goktug01-dev/HutbeSunumAsistani',
  },
]

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects