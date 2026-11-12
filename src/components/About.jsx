const highlights = [
  {
    title: 'Vice Chair · IEEE İKÇÜ',
    text: 'I serve on the Executive Board of the IEEE student branch at İzmir Katip Çelebi University.',
  },
  {
    title: 'Intern · IEEE İKÇÜ TechOps',
    text: "I'm an intern in TechOps, the branch's technical operations and infrastructure department.",
  },
  {
    title: 'Software Team · ROTA',
    text: "I'm on the ROTA team's software team in the TEKNOFEST Robotaxi (autonomous taxi) category, working with ROS 2.",
  },
  {
    title: 'Interests',
    text: 'Embedded software and image processing, built on a solid foundation in C.',
  },
]

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I'm a first-year Computer Engineering student at İzmir Katip Çelebi
        University. I'm interested in embedded software and image processing,
        and I'm building my skills in C and ROS 2 by working on real projects
        with my teams.
      </p>
      <div className="highlights">
        {highlights.map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About