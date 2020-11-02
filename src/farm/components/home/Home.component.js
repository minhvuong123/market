import React from 'react';
import ProductComponent from 'farm/components/product/Product.component';

function HomeComponent() {
  return (
    <React.Fragment>
      <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Products</span></p>
              <h1 className="mb-0 bread">Products</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 mb-5 text-center">
              <ul className="product-category">
                <li><a href="/" className="active">All</a></li>
                <li><a href="/">Vegetables</a></li>
                <li><a href="/">Fruits</a></li>
                <li><a href="/">Juice</a></li>
                <li><a href="/">Dried</a></li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3">
              <ProductComponent src='images/product-1.jpg' />
            </div>
            <div className="col-md-6 col-lg-3">
              <ProductComponent src='images/product-2.jpg' />
            </div>
            <div className="col-md-6 col-lg-3">
              <ProductComponent src='images/product-3.jpg' />
            </div>
            <div className="col-md-6 col-lg-3">
              <ProductComponent src='images/product-4.jpg' />
            </div>


            <div className="col-md-6 col-lg-3">
              <ProductComponent src='images/product-5.jpg' />
            </div>
            <div className="col-md-6 col-lg-3">
              <ProductComponent src='images/product-6.jpg' />
            </div>
            <div className="col-md-6 col-lg-3">
              <ProductComponent src='images/product-7.jpg' />
            </div>
            <div className="col-md-6 col-lg-3">
              <ProductComponent src='images/product-8.jpg' />
            </div>

            <div className="col-md-6 col-lg-3">
              <ProductComponent src='images/product-9.jpg' />
            </div>
            <div className="col-md-6 col-lg-3">
              <ProductComponent src='images/product-10.jpg' />
            </div>
            <div className="col-md-6 col-lg-3">
              <ProductComponent src='images/product-11.jpg' />
            </div>
            <div className="col-md-6 col-lg-3">
              <ProductComponent src='images/product-12.jpg' />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li><a href="/">&lt;</a></li>
                  <li className="active"><span>1</span></li>
                  <li><a href="/">2</a></li>
                  <li><a href="/">3</a></li>
                  <li><a href="/">4</a></li>
                  <li><a href="/">5</a></li>
                  <li><a href="/">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default HomeComponent;