import React from "react";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <h2 className="heading"> Welcome to the Online store.</h2>

      <section>
        <h2> Products</h2>
        <Products/>
      </section>
    </>
  );
}
