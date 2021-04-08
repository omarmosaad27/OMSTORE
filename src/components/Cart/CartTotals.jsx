import React from 'react'
import {Link} from 'react-router-dom'
const CartTotals = ({value}) => {
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value
    return (
        <>
            <div className="container">
                <div className="totals-grid">
                    <div></div>
                    <div></div>
                    <div className="totals">
                        <Link to="/">
                            <button className="btn-outline" type="button" onClick={()=>clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal:
                            </span>
                            <strong>
                                ${cartSubtotal}
                            </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax:
                            </span>
                            <strong>
                                ${cartTax}
                            </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total:
                            </span>
                            <strong>
                                ${cartTotal}
                            </strong>
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTotals
