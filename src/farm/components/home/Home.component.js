import React, { useEffect, useState } from 'react';
import ProductComponent from 'farm/components/product/Product.component';
import api from 'api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts, getCategories, setLoading } from 'app-redux/actions';
import { Menu, Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';


function HomeComponent({ products, getProductsAction, categories, getCategoriesAction, setLoadingAction }) {
  const [currentProduct, setCurrentProduct] = useState('all');
  const [currentPagination, setCurrentPagination] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setLoadingAction(true);
      const results = await Promise.all([api.get(`/products/${1}/${10}`), api.get('/categories')]);
      setTimeout(() => {
        setLoadingAction(false);
        getCategoriesAction(results[1].data.categories);
        getProductsAction(results[0].data.products);
        setTotalPage(results[0].data.count);
      }, 1000);
    }
    fetchData();
    return () => {

    }
  }, [getProductsAction, getCategoriesAction, setLoadingAction])

  async function loadDataCategory(e, id) {
    setLoadingAction(true);
    const result = await api.post(`/products/category`, { id, page: 1, limit: 10 });
    setTimeout(() => {
      setLoadingAction(false);
      getProductsAction(result.data.products);
      setCurrentProduct(e.key);
      setTotalPage(result.data.count);
      setCurrentPagination(1);
    }, 1000);
  }

  async function handlePagination(page) {
    setLoadingAction(true);
    const result = await api.post(`/products/category`, { id: currentProduct, page, limit: 10 });
    setTimeout(() => {
      setLoadingAction(false);
      getProductsAction(result.data.products);
      setCurrentPagination(page);
    }, 1000);
  }

  return (
    <React.Fragment>
      <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Products</span></p>
              <h1 className="mb-0 bread">Products</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row mr-0 ml-0">
        <div className="p-30 col-md-12 img img-2 d-flex justify-content-center align-items-center">
          <NavLink to="/search" className="icon d-flex justify-center align-center" style={{ width: 50, height: 50 }}>
            <SearchOutlined />
          </NavLink>
        </div>
      </div>
      <section>
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
    </React.Fragment>
  )
}

function mapStateToProps({ productsReducer, categoriesReducer }) {
  return {
    products: productsReducer.products,
    categories: categoriesReducer.categories
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProductsAction: getProducts,
    getCategoriesAction: getCategories,
    setLoadingAction: setLoading
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);