import React from 'react'
import PropTypes from 'prop-types'

const CartProduct = ({ price, inventory, title }) => (
  <div>
    Rick {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
  </div>
)

CartProduct.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default CartProduct
