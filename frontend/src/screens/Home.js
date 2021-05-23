import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} ml={4} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
