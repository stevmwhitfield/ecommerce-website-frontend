import React from "react";

import * as styles from "../../styles/Cart/ProductPreview.module.scss";

const removeCartItem = (item) => {
  console.log("Removed " + item.name + " from the cart!");
};

const ProductPreview = ({ imgSrc, name, price }) => {
  const item = { imgSrc, name, price };
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={imgSrc} alt={name} />
      </div>
      <div className={styles.contentContainer}>
        <h2>{name}</h2>
        <p>{`$${price}`}</p>
      </div>
      <button onClick={() => removeCartItem(item)}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default ProductPreview;
