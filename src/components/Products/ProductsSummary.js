import classes from "./ProductsSummary.module.css";
import React from "react";

const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delievered To You </h2>
      <p>
        We are truly passionate about our work and honored to serve our
        community. Unwilling to settle for half-baked service, we strive to
        satisfy every patron with a super-sized serving of energy, enthusiasm,
        and an expertly curated selection of the best cannabis products that can
        be found.
      </p>
    </section>
  );
};

export default ProductsSummary;
