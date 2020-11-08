import React, { useEffect, useState } from 'react';
import ProductComponent from 'farm/components/product/Product.component';
import api from 'api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts, getCategories } from 'redux/actions';
import { Spin, Space, Menu, Pagination } from 'antd';

function HomeComponent({ products, getProductsAction, categories, getCategoriesAction }) {
  const [currentProduct, setCurrentProduct] = useState('all');
  const [currentPagination, setCurrentPagination] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const results = await Promise.all([api.get(`/products/${1}/${10}`), api.get('/categories')]);
      setTimeout(() => {
        setLoading(false);
        getCategoriesAction(results[1].data.categories);
        getProductsAction(results[0].data.products);
        setTotalPage(results[0].data.count);
      }, 1000);
    }
    fetchData();
    return () => {

    }
  }, [getProductsAction, getCategoriesAction])

  async function loadDataCategory(e, id) {
    setLoading(true);
    const result = await api.post(`/products/category`, { id, page: 1, limit: 10 });
    setTimeout(() => {
      setLoading(false);
      getProductsAction(result.data.products);
      setCurrentProduct(e.key);
      setTotalPage(result.data.count);
      setCurrentPagination(1);
    }, 1000);
  }

  async function handlePagination(page) {
    setLoading(true);
    const result = await api.post(`/products/category`, { id: currentProduct, page, limit: 10 });
    setTimeout(() => {
      setLoading(false);
      getProductsAction(result.data.products);
      setCurrentPagination(page);
    }, 1000);
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
              <Menu selectedKeys={[currentProduct]} mode="horizontal" className="product-category text-center">
                <Menu.Item key="all" onClick={(event) => loadDataCategory(event, 'all')}>All</Menu.Item>
                {
                  categories
                  && categories.length
                  && categories.map(category => <Menu.Item key={category.category_title} onClick={(event) => loadDataCategory(event, category._id)}> {category.category_title}</Menu.Item>)
                }
              </Menu>
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
                : <div className="text-center col-md-12">Product not found</div>
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
              <div className="">
               {
                  totalPage 
                  ? <Pagination
                      className="app-pagination"
                      current={currentPagination}
                      onChange={handlePagination}
                      total={totalPage > 10 ? totalPage : 10}
                    />
                  : ""
               }
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        loading && <Space className="app-loading" size="middle"><Spin size="large" /> </Space>
      }
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