import React from 'react'

const CartItem = ({item ,value}) => {
    const {img,price,title,id,total,count} = item
    const {removeItem, inCrement, deCrement} = value
    return (
        <div className="item-grid">
            <div>
                <img src={img} alt={title} className="img-fluid" style={{width:"5rem",height:"5rem"}}/>
            </div>
            <div className="text-title d-flex">
                <h4 className="d-lg-none">product:</h4>
                <h4>{title}</h4>
            </div>
            <div className="text-title d-flex">
                <span className="d-lg-none">price:</span>
                <h4>${price}</h4>
            </div>
            <div className="text-title">
                <div className="d-flex">
                    <span className="btn" onClick={()=>deCrement(id)}>
                        -
                    </span>
                    <span className="btn">
                        {count}
                    </span>
                    <span className="btn" onClick={()=>inCrement(id)}>
                        +
                    </span>
                </div>
            </div>
            <div className="remove-item" onClick={()=>removeItem(id)}>
                <i className="fa fa-trash"></i>
            </div>
            <div className="text-title ">
                <strong>item total: ${total}</strong>
            </div>
        </div>
    )
}

export default CartItem
