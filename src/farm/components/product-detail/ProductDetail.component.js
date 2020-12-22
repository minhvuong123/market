import api from 'api';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProduct, setLoading } from 'app-redux/actions';
import { parseCurrentVND } from 'utils';
import { message } from 'antd';
import moment from 'moment';
import jwt from 'jsonwebtoken';

function ProductDetailComponent({ match, product, getProductAction, setLoadingAction }) {
  const product_id = match.params.productID;

  useEffect(() => {
    async function fetData() {
      setLoadingAction(true);
      api.get(`/products/${product_id}`).then(results => {
        setTimeout(() => {
          setLoadingAction(false);
          getProductAction(results.data.product);
        }, 1000);
      });
    }
    fetData();
  }, [product_id, getProductAction, setLoadingAction]);

  function handleAddCart(e) {
    e.preventDefault();

    const token = localStorage.getItem('token');
    jwt.verify(token, 'kiwi', function (err, decoded) {
      if (!err) {
        const order = {
          order_user: decoded._doc._id,
          order_product: product,
          order_amount: 1,
          order_status: 'pending',
          order_transaction: '',
          created_at: moment().toISOString()
        }
        api.post('/orders', { order }).then(result => {
          if (result.data.status === 'ok') {
            // message to notification
            message.open({
              type: 'info',
              content: 'Added to card successfully!',
              duration: 1,
            });
          } else {
            // message to notification
            message.open({
              type: 'warning',
              content: 'Added to card failed...',
              duration: 1,
            });
          }
        })
      }
    });
  }

  return product && Object.keys(product).length !== 0 ? (
    <React.Fragment>
      {/* <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9  text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span className="mr-2"><a href="index.html">Product</a></span> <span>Product Single</span></p>
              <h1 className="mb-0 bread">Product Single</h1>
            </div>
          </div>
        </div>
      </div> */}

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 ">
              <a href="/" className="image-popup">
                <img src={`http://localhost:4000/${product.product_images_link[0].image_url}`} className="img-fluid" alt="Colorlib Template" />
              </a>
            </div>
            <div className="col-lg-6 product-details pl-md-5 ">
              <h3>{product.product_title}</h3>
              <div className="rating d-flex">
                <p className="text-left mr-4">
                  <a href="/" className="mr-2">5.0</a>
                  <a href="/"><span className="ion-ios-star-outline"></span></a>
                  <a href="/"><span className="ion-ios-star-outline"></span></a>
                  <a href="/"><span className="ion-ios-star-outline"></span></a>
                  <a href="/"><span className="ion-ios-star-outline"></span></a>
                  <a href="/"><span className="ion-ios-star-outline"></span></a>
                </p>
                <p className="text-left mr-4">
                  <a href="/" className="mr-2" style={{ color: '#000' }}>100 <span style={{ color: '#bbb' }}>Rating</span></a>
                </p>
                <p className="text-left">
                  <a href="/" className="mr-2" style={{ color: '#000' }}>500 <span style={{ color: '#bbb' }}>Sold</span></a>
                </p>
              </div>
              <p className="price"><span>{parseCurrentVND(product.product_price)}</span></p>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.
						</p>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="form-group d-flex">
                    <div className="select-wrap">
                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                      <select name="" id="" className="form-control">
                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                        <option value="">Extra Large</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="input-group col-md-6 d-flex mb-3">
                  <span className="input-group-btn mr-2">
                    <button type="button" className="quantity-left-minus btn" data-type="minus" data-field="">
                      <i className="ion-ios-remove"></i>
                    </button>
                  </span>
                  <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue="1" min="1" max="100" />
                  <span className="input-group-btn ml-2">
                    <button type="button" className="quantity-right-plus btn" data-type="plus" data-field="">
                      <i className="ion-ios-add"></i>
                    </button>
                  </span>
                </div>
                <div className="w-100"></div>
                <div className="col-md-12">
                  <p style={{ color: '#000' }}>{product.product_amount} kg available</p>
                </div>
              </div>
              <p>
                <a onClick={handleAddCart} href="cart.html" className="btn btn-black py-3 px-5">Add to Cart</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ">
              <span className="subheading">Products</span>
              <h2 className="mb-4">Related Products</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
          </div>
        </div>
        {/* <div className="container">
    		<div className="row">
    			<div className="col-md-6 col-lg-3 ">
            <ProductComponent src='images/product-1.jpg' />
    			</div>
    			<div className="col-md-6 col-lg-3 ">
            <ProductComponent src='images/product-2.jpg' />
    			</div>
    			<div className="col-md-6 col-lg-3 ">
    				<ProductComponent src='images/product-3.jpg' />
    			</div>
    			<div className="col-md-6 col-lg-3 ">
    		  	<ProductComponent src='images/product-4.jpg' />
    			</div>
    		</div>
    	</div> */}
      </section>
    </React.Fragment>
  ) : "Not found"
}

function mapStateToProps({ productsReducer }, ownProps) {
  return {
    product: productsReducer.product
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    getProductAction: getProduct,
    setLoadingAction: setLoading
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailComponent);