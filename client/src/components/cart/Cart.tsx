import { Offcanvas, Stack } from "react-bootstrap";

import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import CartItem from "../cartItem/CartItem";
import storeItems from "../../data/items.json";

type CartProps = {
  isOpen: boolean;
};

const Cart = ({ isOpen }: CartProps) => {
  const { closeCart, cartItems } = useCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title> Cart </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item, ind) => (
            <CartItem key={ind} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((item) => cartItem.id == item.id);
                return total + (item?.price1 || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
