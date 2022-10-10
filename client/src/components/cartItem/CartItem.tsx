import { Stack, Button } from "react-bootstrap";

import { useCart } from "../../context/CartContext";
import storeItems from "../../data/items.json";
import { formatCurrency } from "../../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useCart();
  const item = storeItems.find((item) => item.id == id);
  if (item == null) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          src={item.imgUrl}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.name}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: "0.65rem" }}>
                X {quantity}
              </span>
            )}
          </div>
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price1)}
        </div>
        <div>{formatCurrency(item.price1 * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </Stack>
    </>
  );
};

export default CartItem;
