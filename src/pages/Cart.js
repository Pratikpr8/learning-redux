import React from "react";
import { remove } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <div className="childCart">
              <img className="image" src={product.image} alt="" />
              <div className="mr-1">
                <h5>{product.title}</h5>
              </div>
            </div>

            <div className="childCart">
              <h5 className="mr-1">${product.price}</h5>
              <button
                onClick={() => handleRemove(product.id)}
                className="btn btn--danger"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
