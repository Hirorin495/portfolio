import Container from "components/container"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar, faSquareCheck, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Container>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" href="/">
              <img src="/MyLogo1.png" alt="image"/>
            </Link>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="menu" onClick={toggleMenu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="menu" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" href="/">
                <FontAwesomeIcon icon={faUser} /> Top
              </Link>
              <Link className="navbar-item" href="/skills">
                <FontAwesomeIcon icon={faStar} /> Skills
              </Link>
              <Link className="navbar-item" href="/certifications">
                <FontAwesomeIcon icon={faSquareCheck} /> Certifications
              </Link>
              <Link className="navbar-item" href="/links">
                <FontAwesomeIcon icon={faCommentDots} /> Links
              </Link>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

function toggleMenu() {
  const $navbarBurgers = document.querySelectorAll('.navbar-burger');

  $navbarBurgers.forEach( el => {
    const target = el.dataset.target;
    const $target = document.getElementById(target);

    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');
  });
}