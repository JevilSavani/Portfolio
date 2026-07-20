const skills = ['C++', 'Pandas', 'Numpy', "Power Bi", 'Node.js', "Pythom"]

function Skills() {
    return (
        <section className="section skills-section">
            <div className="section-title">
                <span></span>
                <h2>My Skills</h2>
            </div>
            <div className="skill-list">
                {skills.map((skill) => (
                    <div key={skill} className="skill-pill">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
