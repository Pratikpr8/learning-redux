import React from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

export default function Products() {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);

  React.useEffect(() => {
    dispatch(fetchProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING){
    return <h2>Loading....</h2>
  }

  if (status === STATUSES.ERROR){
    return <h2>Something went wrong.</h2>
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div>
          <img className="image" src={product.image} alt="" />
          <h4>{product.title}</h4>
          </div>
          <div>
          <h5>${product.price}</h5>
          <button
            onClick={() => handleAdd(product)}
            className="btn btn--primary"
          >
            Add to Cart
          </button>
          </div>
        </div>
      ))}
    </div>
  );
}
