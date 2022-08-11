import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <a
          href="https://www.linkedin.com/in/joao-paulo-viegas/"
          target="_blank"
          rel="noreferrer"
        >
          <li>LinkedIn</li>
        </a>
        <a href="https://github.com/jpviegas" target="_blank" rel="noreferrer">
          <li>GitHub</li>
        </a>
      </ul>
    </header>
  );
}

export default Header;
