import React from 'react'
import PropTypes from 'prop-types'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0

  return (
    <div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
