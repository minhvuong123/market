import React from 'react';
import { NavLink } from 'react-router-dom';

function ShortProductComponent({category}) {
  return (
    <NavLink to={`/${category.category_sale}`} className="short" style={{maxWidth: 117}}>
      <div className="app-short-product border-grey-1 bg-white pt-10 pb-10" style={{height: "100%"}}>
        <div 
          className="short-product-icon" 
          style={{
            height: 100,
            width: 115,
            backgroundImage: `url(http://localhost:4000/static/${category.category_img})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }} />
        <p className="text-center pl-5 pr-5" style={{maxWidth: '150px'}}>{category.category_name || ''}</p>
      </div>
    </NavLink>
  )
}

export default ShortProductComponent;