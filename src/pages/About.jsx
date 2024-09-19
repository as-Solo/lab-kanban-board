function About (){
    return(
        <div id="about">
            <h1>About page</h1>
            <h3>Description of the project</h3>
            <div className="student-card">
                <h2>Alejandro del Solo</h2>
                <img src="" alt="student1 image" />
                <a href="https://www.linkedin.com"><img src="" alt="student1 linkedin" /></a>
                <a href="https://github.com/as-Solo"><img src="" alt="student1 github" /></a>
            </div>
            <div className="student-card">
                <h2>David Carballo</h2>
                <img src="" alt="student2 image" />
                <a href="https://www.linkedin.com"><img src="" alt="student2 linkedin" /></a>
                <a href="https://github.com/David-Carballo"><img src="" alt="student2 github" /></a>
            </div>
        </div>
    );
}

export default About;