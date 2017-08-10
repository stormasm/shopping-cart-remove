import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from '../actions'
import { checkout } from "../actions";
import { getTotal, getCartProducts } from "../reducers";
import Cart from "../components/Cart";

import CartItem from "../components/CartItem";
import CartList from "../components/CartList";

const CartContainer = ({ products, total, checkout }) =>
  <div>
    <CartList title="Your Cart">
      {products.map(product =>
        <CartItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}
        />
      )}
    </CartList>
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => checkout(products)}
    />
  </div>;

CartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state)
});

export default connect(mapStateToProps, { checkout })(CartContainer);
