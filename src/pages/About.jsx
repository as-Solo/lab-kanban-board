import logoLinkedin from "../assets/linkedin-logo-white.png"
import logoGitHub from "../assets/github-logo-white.png"
import aleImg from "../assets/alejandro.png"
import dvdImg from "../assets/david.png"

function About (){
    return(
        <div id="about">
            <h1>About us</h1>
            <p>
            A Kanban Board app allows users to create, organize, and manage tasks using a visual interface with columns like "Backlog", "To Do", "In Progress" and "Done." Users can easily add, edit and delete tasks, drag them between columns and filter task by priority or assignee.</p>
            <div className="student-row">
                <div className="student-card">
                    <h2>Alejandro del Solo</h2>
                    <img className="student-img" src={aleImg} alt="student1 image" />
                    <div className="student-rrss">
                        <a href="https://www.linkedin.com/in/as-solo"><img src={logoLinkedin} alt="student1 linkedin" /></a>
                        <a href="https://github.com/as-Solo"><img src={logoGitHub} alt="student1 github" /></a>
                    </div>
                </div>
                <div className="student-card">
                    <h2>David Carballo</h2>
                    <img className="student-img" src={dvdImg} alt="student2 image" />
                    <div className="student-rrss">
                        <a href="https://www.linkedin.com/in/david-carballodev/"><img src={logoLinkedin} alt="student2 linkedin" /></a>
                        <a href="https://github.com/David-Carballo"><img src={logoGitHub} alt="student2 github" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;