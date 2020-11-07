import React, { useEffect } from 'react';
import ProductComponent from 'farm/components/product/Product.component';
import api from 'api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts, getCategories } from 'redux/actions';

function HomeComponent({ products, getProductsAction, categories, getCategoriesAction }) {
  useEffect(() => {
    Promise.all([api.get('/products'), api.get('/categories')]).then(results => {
      getProductsAction(results[0].data.products)
      getCategoriesAction(results[1].data.categories)
    })
    return () => {

    }
  }, [getProductsAction, getCategoriesAction])

  function loadDataCategory(e, id) {
    e.preventDefault();

    api.post(`/products/category`, { id }).then(result => {
      getProductsAction(result.data.products)
    })
  }
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
                <li><a onClick={(event) => loadDataCategory(event, 'all')} href="/" className="active">All</a></li>
                {
                  categories 
                  && categories.length
                  && categories.map(category => {
                    return  <React.Fragment key={category._id}>
                              <li><a onClick={(event) => loadDataCategory(event, category._id)} href="/">{category.category_title}</a></li>
                            </React.Fragment>
                  })
                }
              </ul>
            </div>
          </div>

          <div className="row">
            {
              products
                && products.length
                ? products.map(product => {
                  return <React.Fragment key={product._id}>
                    <div className="col-md-6 col-lg-3">
                      <ProductComponent product={product} />
                    </div>
                  </React.Fragment>
                })
                : <div className="text-center">Product not found</div>
            }
            {/* <div className="col-md-6 col-lg-3">
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
            </div> */}
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

function mapStateToProps({ productsReducer, categoriesReducer }, ownProps) {
  return {
    products: productsReducer.products,
    categories: categoriesReducer.categories
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    getProductsAction: getProducts,
    getCategoriesAction: getCategories
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);