import React from "react";

import { products } from "../../data/products";
import ProductCard from "./ProductCard";

import * as styles from "../../styles/Products/ProductList.module.scss";

const ProductList = () => {
  return (
    <div className={styles.products}>
      {products.map(product => {
        const { imgSrc, name, price } = product;
        return <ProductCard imgSrc={imgSrc} name={name} price={price} />;
      })}
    </div>
  );
};

export default ProductList;
