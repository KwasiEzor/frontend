import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Link from "next/link";
const _Nav = () => {
  return (
    <Navbar bg="" className="bra-bg-primary " expand="lg">
      <Container>
        <Navbar.Brand style={{ cursor: "pointer" }}>
          <Link href="/">
            <img
              src="/assets/images/logo-braine.svg"
              alt="Logo Braine Trust"
              style={{ width: "12.5rem" }}
            />
          </Link>
        </Navbar.Brand>
        <div className="spacer"></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className=" home__nav d-flex align-self-end">
            <Link href="/" passHref>
              <Nav.Link className="text-white">Accueil</Nav.Link>
            </Link>

            <Link href="/agenda" passHref>
              <Nav.Link className="text-white">Agenda</Nav.Link>
            </Link>
            <Link href="/scrabble" passHref>
              <Nav.Link className="text-white">Scrabble</Nav.Link>
            </Link>
            <Link href="/parties" passHref>
              <Nav.Link className="text-white">Parties</Nav.Link>
            </Link>
            <NavDropdown
              title="Club"
              id="basic-nav-dropdown"
              className="text-white"
            >
              <Link href="/membres" passHref>
                <NavDropdown.Item>Membres</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />

              <Link href="/organigramme" passHref>
                <NavDropdown.Item>Organigramme</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/membres/histoire" passHref>
                <NavDropdown.Item>Histoire du club</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link href="/inscription" passHref>
              <Nav.Link className="btn btn-warning" id="btnSingin">
                S'inscrire
              </Nav.Link>
            </Link>
            <Link href="/connexion" passHref>
              <Nav.Link
                className="btn btn-default text-white"
                id="btnLogin"
                title="Bouton de connexion"
              >
                <i className="fas fa-user-circle text-white"></i>
              </Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link
                className="btn btn-default text-white"
                id="btnLogin"
                title="Bouton de contact"
              >
                <i className="fas fa-envelope text-white"></i>
              </Nav.Link>
            </Link>
            <Link href="/blog" passHref>
              <Nav.Link className="btn btn-default text-white" id="btnLogin">
                Blog
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default _Nav;
