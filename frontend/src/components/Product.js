import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-2 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} varient="top"></Card.Img>
      </Link>
      <Card.Body style={{ padding: "0.25rem" }}>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
