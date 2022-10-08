import { Card } from "react-bootstrap";

import { formatCurrency } from "../../utils/formatCurrency";

type ProductProps = {
  id: number;
  name: string;
  price1: number;
  price2: number;
  imgUrl: string;
  category: string;
};

const Product = ({
  id,
  name,
  price1,
  price2,
  imgUrl,
  category,
}: ProductProps) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2"> {name} </span>
          <span className="ms-2 text-muted"> {formatCurrency(price1)} </span>
          <span className="ms-2 text-muted"> {formatCurrency(price2)} </span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Product;
