import React from 'react';
import { Rate  } from 'antd';
import { NavLink } from 'react-router-dom';

function ProductComponent({ product_id, product_title, product_images, product_category, width }) {
  return (
    <NavLink to={`/${product_category}/product/${product_id}`} style={{width: `${width ? (width - 1 + '%') : '180px'}`}}>
      <div className="app-product relative d-flex flex-column mt-10 p-10 bg-white">
        <div className="product-image" ><img src={`http://localhost:4000/static/${product_images[0]}`} alt=""/></div>
        <div className="product-des d-flex flex-column">
          <div className="title" style={{maxWidth: '160px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>
            {product_title}
          </div>
          <div className="price">
            <span className="currentcy">đ</span>
            <span className="text">80.000</span>
          </div>
          <div className="product-progress text-center radius-5 relative" style={{padding: '.3rem', overflow: 'hidden', backgroundColor: '#ffe4c469'}}>
            <span>Đã bán 0</span>
            <div className="progress-percent absolute" style={{width: '50%', height: '100%', top: 0, left: 0, backgroundColor: '#2ab09d80'}} />
          </div>
          <div className="product-rate text-right" >
            <span className="rate"> 
              <Rate disabled defaultValue={5} />
            </span>
            <span style={{fontSize: 10}}>Đã bán 14</span>
          </div>
          <div className="product-locate text-right">
            HCM
          </div>
        </div>
        <div className="product-coupon absolute p-5" style={{top: 0, right: 0, backgroundColor: 'yellow'}}>
          <div className="coupon">
            <p style={{color: 'red'}}>50%</p>
            <p style={{color: 'white'}}>Giảm</p>
          </div>
        </div>
        <div className="product-favorite absolute" style={{top: 10, left: 0, backgroundColor: 'red', padding: '2px 5px'}}>
          <span>Yêu thích</span>
        </div>
        <div className="product-same absolute" style={{textAlign: 'center', left: 0, top: '100%', width: '100%', padding: '.5rem', backgroundColor: 'red', display: 'none'}}>
          Sản phẩm tương tự
        </div>
      </div>
    </NavLink>
  )
}

export default ProductComponent;