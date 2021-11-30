import React from "react";

import Layout from "../components/Layout/Layout";
import Head from "../components/Layout/Head";
import ProductPreview from "../components/Cart/ProductPreview";
import { cartData } from "../components/Products/ProductList";

import * as styles from "../styles/Cart/Cart.module.scss";

const CartPage = () => {
  const cartItems = cartData;
  const itemCount = cartData.length;
  let totalCost = 0;
  cartItems.forEach((item) => (totalCost += parseFloat(item.price)));

  // does not work
  const removeItem = (item) => {
    cartItems.filter((cartItem) => cartItem === item);
  };

  return (
    <>
      <Layout>
        <Head
          title="Cart | Phoenix Tech - Computer Accessories and Peripherals"
          description=""
          // url=""
        />
        <div className={styles.mainWrapper}>
          <div className={styles.heading}>
            <h1>Cart</h1>
          </div>
          <div className={styles.contentContainer}>
            {itemCount > 0 ? (
              <h2>Items {`[${itemCount}]`}</h2>
            ) : (
              <h2 style={{ textAlign: "center" }}>No items in the cart!</h2>
            )}
            <div className={styles.cartItems}>
              {cartItems.map((item) => {
                return (
                  <ProductPreview
                    removeItem={removeItem}
                    imgSrc={item.imgSrc}
                    name={item.name}
                    price={item.price}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.checkoutContainer}>
            <div className={styles.checkoutWrapper}>
              <h2>Total</h2>
              <p>{`$${totalCost}`}</p>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CartPage;
