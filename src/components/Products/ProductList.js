import React from "react";

import { products } from "../../data/products";
import ProductCard from "./ProductCard";

import * as styles from "../../styles/Products/ProductList.module.scss";

const ProductList = () => {
  return (
    <div className={styles.products}>
      {products.map((product, index) => {
        const { imgSrc, name, price } = product;
        return (
          <ProductCard key={index} imgSrc={imgSrc} name={name} price={price} />
        );
      })}
    </div>
  );
};

export default ProductList;
