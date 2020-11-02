import React from 'react';
import { NavLink } from 'react-router-dom';

function HorizontalProductComponent({product}) {
  return (
    <NavLink to={`/${product.product_category}/${product.product_id}`}>
      <div 
        className="app-horizontal-product d-flex justify-center align-center mt-10"
      >
        <div 
          className="horizontal-product-icon" 
          style={{
            width: 100, 
            height: 100,
            backgroundImage: `url(http://localhost:4000/static/${product.product_images[0]})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }} />
        <div className="p-10">
          <p style={{maxWidth: 500}}>{product.product_title}</p>
          <p>{product.product_amount} Sản phẩm</p>
        </div>
      </div>
    </NavLink>
  )
}

export default HorizontalProductComponent;