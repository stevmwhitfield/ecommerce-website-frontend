import React from "react";

import * as styles from "../../styles/Products/ProductCard.module.scss";

const addItemToCart = item => {
  console.log("Added " + item.name + " to the cart!");
};

const ProductCard = ({ imgSrc, name, price }) => {
  const item = { imgSrc, name, price };
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={imgSrc} alt={name} />
      </div>
      <div className={styles.contentContainer}>
        <h2>{name}</h2>
        <p>{`\$${price}`}</p>
      </div>
      <button onClick={() => addItemToCart(item)}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default ProductCard;
