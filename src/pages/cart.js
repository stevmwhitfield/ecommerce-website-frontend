import React from "react";

import Layout from "../components/Layout/Layout";
import Head from "../components/Layout/Head";
import ProductPreview from "../components/Cart/ProductPreview";

import * as styles from "../styles/Cart/Cart.module.scss";

const CartPage = () => {
  const itemCount = 2;
  const testItems = [
    {
      imgSrc:
        "https://purepng.com/public/uploads/large/purepng.com-2cd43b-1f2f8a8fe0444c828f27d6241c173477-mv2musicheadphoneearphoneslisteningearssounds-231519334370fe7mk.png",
      name: "Headphones 1",
      price: "59.99",
    },
    {
      imgSrc:
        "https://purepng.com/public/uploads/large/purepng.com-2cd43b-1f2f8a8fe0444c828f27d6241c173477-mv2musicheadphoneearphoneslisteningearssounds-231519334370fe7mk.png",
      name: "Headphones 3",
      price: "99.99",
    },
  ];
  let totalCost = 0;
  testItems.forEach((item) => (totalCost += parseFloat(item.price)));

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
            <h2>Items {`[${itemCount}]`}</h2>
            <div className={styles.cartItems}>
              {testItems.map((item) => {
                return (
                  <ProductPreview
                    imgSrc={item.imgSrc}
                    name={item.name}
                    price={item.price}
                  />
                );
              })}
              {/* {cartItems.map((item) => {
              return (
                <ProductPreview
                  imgSrc={item.imgSrc}
                  name={item.name}
                  price={item.price}
                />
              );
            })} */}
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
