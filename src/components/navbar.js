import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" className="bg-black">
          <Container className="text-start">
            <Navbar.Brand href="/mascotas">Adóptame</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default NavBar;
