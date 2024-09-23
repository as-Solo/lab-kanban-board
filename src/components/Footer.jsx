import logoGitHub from "../assets/github-logo.png"


function Footer(props) {
  return (
    <footer id="footer">
      <a href="https://github.com/as-Solo/lab-kanban-board"><img src={logoGitHub} alt="github logo" className="footerLogo"/></a>
    </footer>
  )
}

export default Footer