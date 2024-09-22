function About (){
    return(
        <div id="about">
            <h1>About us</h1>
            <p>A Kanban Board app where the user can create, organize, and manage tasks through columns "Backlog, “To Do”, “In Progress” and “Done”.</p>
            <div className="student-row">
                <div className="student-card">
                    <h2>Alejandro del Solo</h2>
                    <img className="student-img" src="./src/assets/alejandro.png" alt="student1 image" />
                    <div className="student-rrss">
                        <a href="https://www.linkedin.com/in/as-solo"><img src="./src/assets/linkedin-logo-white.png" alt="student1 linkedin" /></a>
                        <a href="https://github.com/as-Solo"><img src="./src/assets/github-logo-white.png" alt="student1 github" /></a>
                    </div>
                </div>
                <div className="student-card">
                    <h2>David Carballo</h2>
                    <img className="student-img" src="./src/assets/david.png" alt="student2 image" />
                    <div className="student-rrss">
                        <a href="https://www.linkedin.com/in/david-carballodev/"><img src="./src/assets/linkedin-logo-white.png" alt="student2 linkedin" /></a>
                        <a href="https://github.com/David-Carballo"><img src="./src/assets/github-logo-white.png" alt="student2 github" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;