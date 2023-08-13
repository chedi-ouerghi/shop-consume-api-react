import React, { useState, useContext } from "react";
import { CartDispatchContext, addToCart } from "../contexts/cart";

const ProductCard = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useContext(CartDispatchContext);
  const { thumbnail, title, price, id, stock } = data;

  const handleAddToCart = () => {
    const product = { ...data, quantity: 1 };
    addToCart(dispatch, product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3500);
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={thumbnail} alt={title} />
      </div>
      <h4 className="product-name">{title}</h4>
      <p className="product-price">{price}</p>
      <div className="product-action">
        <button
          className={!isAdded ? "" : "added"}
          type="button"
          onClick={handleAddToCart}
          disabled={stock === 0}
        >
          {!isAdded ? (stock > 0 ? "ADD TO CART" : "OUT OF STOCK") : "✔ ADDED"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
