import { Navbar, Container, Nav } from "react-bootstrap"

const NavComponent = function () {
    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home"><img src="https://img.icons8.com/?size=100&id=wNZ3FTgUzSQX&format=png&color=000000" alt="booksLogo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavComponent