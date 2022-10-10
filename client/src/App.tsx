import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/navbar/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </CartProvider>
    </>
  );
}

export default App;
