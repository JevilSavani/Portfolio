const projects = [
    {
        title: 'Portfolio Website',
        description: 'A student portfolio project built with Vite and React.',
    },
    {
        title: 'Weather Oracle',
        description: 'A weather app using a public API to show current conditions.',
    },
]

function Projects() {
    return (
        <section className="section projects-section">
            <div className="section-title">
                <span></span>
                <h2>My Projects</h2>
            </div>
            <div className="project-grid">
                {projects.map((project) => (
                    <article key={project.title} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects
