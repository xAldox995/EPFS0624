import { Container, Nav, Navbar } from "react-bootstrap";

const WelcomeComponent = () => {
  return (
    <>
      <Navbar expand="md"  bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home"><img src="https://img.icons8.com/?size=100&id=16368&format=png&color=000000" alt="bookLogo"/> BestBooks.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="text-center my-5">
        <h1>Welcome to BestBooks.com</h1>
      </div>
    </>
  );
};

export default WelcomeComponent;
