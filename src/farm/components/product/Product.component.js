import React from 'react';

function ProductComponent({src}) {
  return (
    <div className="product">
      <a href="#" className="img-prod"><img className="img-fluid" src={src} alt="Colorlib Template" />
        <div className="overlay"></div>
      </a>
      <div className="text py-3 pb-4 px-3 text-center">
        <h3><a href="#">Green Beans</a></h3>
        <div className="d-flex">
          <div className="pricing">
            <p className="price"><span>$120.00</span></p>
          </div>
        </div>
        <div className="bottom-area d-flex px-3">
          <div className="m-auto d-flex">
            <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
              <span><i className="ion-ios-menu"></i></span>
            </a>
            <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
              <span><i className="ion-ios-cart"></i></span>
            </a>
            <a href="#" className="heart d-flex justify-content-center align-items-center ">
              <span><i className="ion-ios-heart"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent;