import React from "react";
import { useEffect, useState } from "react";
import { Link } from "gatsby";

import * as styles from "../../styles/Home/Hero.module.scss";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};

const Hero = () => {
  const size = useWindowSize();

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.headings}>
          <h1>Featured</h1>
          <h3>Bose Wireless Headphones</h3>
          {size.width >= 480 ? (
            <Link className={styles.button} to="/products">
              Buy Now
            </Link>
          ) : null}
        </div>
        <img
          src="https://purepng.com/public/uploads/large/purepng.com-2cd43b-1f2f8a8fe0444c828f27d6241c173477-mv2musicheadphoneearphoneslisteningearssounds-231519334370fe7mk.png"
          alt="Featured product -- headphones"
        />
      </div>
      {size.width < 480 ? (
        <Link className={styles.button} to="/products">
          Buy Now
        </Link>
      ) : null}
    </div>
  );
};

export default Hero;
