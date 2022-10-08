import { Row, Col } from "react-bootstrap";

import products from "../../data/items.json";
import Product from "../../components/product/Product";

const Shop = () => {
  return (
    <>
      <div>Shop</div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((product) => (
          <Col key={product.id}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Shop;
