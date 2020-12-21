import React, { useEffect, useState } from 'react';
import { parseCurrentVND } from 'utils';
import api from 'api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateOrder } from 'app-redux/actions';
import _ from 'lodash';

function CardRowComponent({ order, updateOrderAction, updateOrders, handleDelete }) {
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(order.order_product.product_price * order.order_amount);
    return () => { }
  }, [order])

  function handleChangeQuantity(e) {
    const quantity = e.target.value;
  
    if (quantity !== '' && isNaN(quantity) === false) {
      const orderSave = _.cloneDeepWith({...order, order_amount: +quantity});
      setTotal(order.order_product.product_price * +quantity);
      updateOrders(order._id, quantity);
      updateOrderAction(orderSave);
  
      api.post('/orders', {order: orderSave, orderChange: true}).then(result => {
        if(result.data.status === 'ok') {
         // handle message
        }
      })
    }
  }

  function handleDeleteCard(e, id) {
    e.preventDefault();
    handleDelete(id);
  }

  return (
    <React.Fragment>
      <tr className="text-center">
        <td onClick={(e) => handleDeleteCard(e, order._id)} className="product-remove"><a href="/"><span className="ion-ios-close"></span></a></td>
        <td className="image-prod">
          <div className="img" style={{ backgroundImage: `url(http://localhost:4000/${order.order_product.product_images_link[0].image_url})` }}></div>
        </td>
        <td className="product-name">
          <h3>{order.order_product.product_title}</h3>
          <p>Far far away, behind the word mountains, far from the countries</p>
        </td>
        <td className="price">{parseCurrentVND(order.order_product.product_price)}</td>
        <td className="quantity">
          <div className="input-group mb-3">
            <input  onChange={handleChangeQuantity} 
                    defaultValue={order.order_amount} 
                    type="text" name="quantity" 
                    className="quantity form-control input-number" />
          </div>
        </td>
        <td className="total">{total && parseCurrentVND(total)}</td>
      </tr>
    </React.Fragment>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    updateOrderAction: updateOrder
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(CardRowComponent);