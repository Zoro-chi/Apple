import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Cart from "../../assets/cart-icon.png";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useCart();

  return (
    <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/shop">
            Shop
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{
              width: "4rem",
              height: "4rem",
              backgroundColor: "#f8f7f3",
              boxShadow: "2px 2px 4px black",
              border: "none",
              position: "relative",
            }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <img
              src={Cart}
              alt="cart"
              style={{ height: "3rem", width: "3rem", objectFit: "contain" }}
            />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "2rem",
                height: "2rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
