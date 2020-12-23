import React, { useEffect, useState } from 'react';
import { DownCircleOutlined, UnorderedListOutlined, FilterOutlined, UpCircleOutlined} from '@ant-design/icons';
import { Checkbox, Pagination, Select } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProducts, getCategories, setLoading } from 'app-redux/actions';
import api from 'api';
import ProductComponent from '../product/Product.component';
import { Menu } from 'antd';
import { countries } from 'const';

const { Option } = Select;

function SearchComponent({ getProductsAction, categories, getCategoriesAction, setLoadingAction }) {
  const [productsCom, setProductsCom] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({ id: 'all', value: 'all' });
  const [productWard, setProductWard] = useState([]);
  const [currentPagination, setCurrentPagination] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [countriesStatus, setCountriesStatus] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoadingAction(true);
      const results = await Promise.all([api.get(`/products/${1}/${50}`), api.get('/categories')]);
      setTimeout(() => {
        setLoadingAction(false);
        getCategoriesAction(results[1].data.categories);
        getProductsAction(results[0].data.products);
        setProductsCom(results[0].data.products);
        setTotalPage(results[0].data.products.length);
      }, 1000);
    }
    fetchData();
  }, [getProductsAction, getCategoriesAction, setLoadingAction]);

  async function handleCategory(e, id) {
    setLoadingAction(true);
    const results = await api.post('/products/filter', { product_category: id, product_ward: productWard });
    setTimeout(() => {
      setLoadingAction(false);
      if ( results.data.products ) {
        setTotalPage(results.data.products.length);
        setProductsCom(results.data.products);
        getProductsAction(results.data.products);
        setCurrentProduct({ id, value: e.key });
        setCurrentPagination(1);
      }
    }, 1000);
  }

  async function handleCheckBoxWard(values) {
    setLoadingAction(true);
    const results = await api.post('/products/filter', { product_category: currentProduct.id, product_ward: values });
    setTimeout(() => {
      setLoadingAction(false);
      if (results.data.products) {
        setProductsCom(results.data.products);
        setProductWard(values);
      }
    }, 1000);
  }

  function onChangePagination(page, pageSize) {
    console.log(page)
  }

  function onChangeStatusCountries(e){
    e.preventDefault();
    setCountriesStatus(!countriesStatus);
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="app-catalog d-flex" style={{ marginTop: 30 }}>
          <div className="catalog-wrap border-r pr-10" style={{ minWidth: 200 }}>
            <div className="catalog-list">
              <h3 className="d-flex align-center pb-10 border-b-1">
                <UnorderedListOutlined style={{ fontSize: 15, marginRight: 10 }} />Tất cả danh mục
              </h3>
              <Menu selectedKeys={[currentProduct.value]} mode="vertical" className="product-category text-center">
                <Menu.Item key="all" onClick={(event) => handleCategory(event, 'all')} className="d-block text-left">All</Menu.Item>
                {
                  categories
                  && categories.length
                  && categories.map(category => {
                    return <Menu.Item
                      key={category.category_title}
                      onClick={(event) => handleCategory(event, category._id)}
                      className="d-block text-left">
                      {category.category_title}
                    </Menu.Item>
                  })
                }
              </Menu>
            </div>

            <div className="catalog-filter" style={{ marginTop: 30 }}>
              <h3 className="d-flex align-center pb-10">
                <FilterOutlined style={{ fontSize: 15, marginRight: 10 }} />Bộ lọc tìm kiếm
              </h3>
              <div className="border-b-1" style={{ paddingLeft: 15 }}>
                <h4>Nơi bán</h4>
                <div className="catalog-filter-content d-flex flex-column">
                  <Checkbox.Group className={`${countriesStatus ? 'h-unset' : ''}`} style={{ height: 110, overflow: 'hidden'}} onChange={handleCheckBoxWard}>
                    {
                      countries.map(c => {
                        return <React.Fragment key={c.id}>
                          <span className="d-block">
                            <Checkbox value={c.id}>{c.name}</Checkbox>
                          </span>
                        </React.Fragment>
                      })
                    }
                  </Checkbox.Group>
                  <a href="/" onClick={onChangeStatusCountries} className="d-flex align-center" style={{ marginTop: 5, marginBottom: 5 }}>
                    Thêm 
                    {
                      countriesStatus ? <UpCircleOutlined style={{ marginLeft: 5 }} /> : <DownCircleOutlined style={{ marginLeft: 5 }} />
                    }
                  </a>
                </div>
              </div>

              {/* <div className="border-b-1" style={{ marginTop: 15, paddingLeft: 15 }}>
                <h4>Đơn vị vận chuyển</h4>
                <div className="catalog-filter-content d-flex flex-column">
                  <Checkbox.Group>
                    <span className="d-block"> <Checkbox value="A">Shopee Express</Checkbox></span>
                    <span className="d-block"> <Checkbox value="A">NowShip</Checkbox></span>
                    <span className="d-block"> <Checkbox value="A">Ninja Van</Checkbox></span>
                    <span className="d-block"> <Checkbox value="A">J&T Express</Checkbox></span>
                  </Checkbox.Group>
                  <a href="/" className="d-flex align-center" style={{ marginTop: 5, marginBottom: 5 }}>Thêm <DownCircleOutlined style={{ marginLeft: 5 }} /></a>
                </div>
              </div>

              <div style={{ marginTop: 15, paddingLeft: 15 }}>
                <h4>Thương hiệu</h4>
                <div className="catalog-filter-content d-flex flex-column">
                  <Checkbox.Group>
                    <span className="d-block"> <Checkbox value="A">No Brand</Checkbox></span>
                    <span className="d-block"> <Checkbox value="A">TP-Link</Checkbox></span>
                    <span className="d-block"> <Checkbox value="A">Canon</Checkbox></span>
                    <span className="d-block"> <Checkbox value="A">Marvo</Checkbox></span>
                  </Checkbox.Group>
                  <a href="/" className="d-flex align-center" style={{ marginTop: 5, marginBottom: 5 }}>Thêm <DownCircleOutlined style={{ marginLeft: 5 }} /></a>
                </div>
              </div> */}

              {/* <div className="border-b-1" style={{ marginTop: 15, paddingLeft: 15 }}>
                <h4>Khoảng giá</h4>
                <div className="catalog-filter-content d-flex flex-column">
                  <Input.Group compact>
                    <Input style={{ width: 80, textAlign: 'center' }} placeholder="Minimum" />
                    <Input
                      className="site-input-split"
                      style={{
                        width: 30,
                        borderLeft: 0,
                        borderRight: 0,
                        pointerEvents: 'none',
                      }}
                      placeholder="~"
                      disabled
                    />
                    <Input
                      className="site-input-right"
                      style={{
                        width: 80,
                        textAlign: 'center',
                      }}
                      placeholder="Maximum"
                    />
                  </Input.Group>
                </div>
              </div> */}
              {/* 
              <div className="border-b-1" style={{ marginTop: 15, paddingLeft: 15 }}>
                <h4>Tình trạng</h4>
                <div className="catalog-filter-content d-flex flex-column">
                  <Checkbox.Group>
                    <span className="d-block"> <Checkbox value="A">Sản phẩm mới</Checkbox></span>
                    <span className="d-block"> <Checkbox value="A">Sản phẩm đã dùng</Checkbox></span>
                  </Checkbox.Group>
                </div>
              </div> */}

              {/* <div className="border-b-1" style={{ marginTop: 15, paddingLeft: 15 }}>
                <h4>Bảng đánh giá</h4>
                <div className="catalog-filter-content d-flex flex-column">
                  <span> <Rate disabled defaultValue={5} character={<HeartOutlined />} /></span>
                  <span> <Rate disabled defaultValue={4} character={<HeartOutlined />} /></span>
                  <span> <Rate disabled defaultValue={3} character={<HeartOutlined />} /></span>
                  <span> <Rate disabled defaultValue={2} character={<HeartOutlined />} /></span>
                  <span> <Rate disabled defaultValue={1} character={<HeartOutlined />} /></span>
                </div>
              </div> */}

              {/* <div className="border-b-1" style={{ marginTop: 15, marginBottom: 30, paddingLeft: 15 }}>
                <h4>Dịch vụ khuyến mãi</h4>
                <div className="catalog-filter-content d-flex flex-column">
                  <Checkbox.Group>
                    <span className="d-block"> <Checkbox value="A">Freeship Xtra</Checkbox></span>
                    <span className="d-block"> <Checkbox value="A">Hoàn xu Xtra</Checkbox></span>
                    <span className="d-block"> <Checkbox value="A">Đang giảm giá</Checkbox></span>
                    <span className="d-block"> <Checkbox value="A">Miễn phí vận chuyển</Checkbox></span>
                  </Checkbox.Group>
                  <a href="/" className="d-flex align-center" style={{marginTop: 5, marginBottom: 5}}>Thêm <DownCircleOutlined style={{marginLeft: 5}} /></a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="catalog-product flex-grow pl-10 pr-10">
            <div className="catalog-product-sort d-flex justify-between" style={{ backgroundColor: 'rgba(0,0,0,.03)', padding: '20px' }}>
              <div className="d-flex align-center flex-grow">
                <span className="space-nowrap">Sắp xếp theo</span>
                <button type="button" className="primary border-0 outline-0 pointer color-white space-nowrap ml-10" style={{ background: '#fb5533', padding: '5px 20px' }}>Phổ biến</button>
                <button type="button" className="primary border-0 outline-0 pointer color-white space-nowrap ml-10" style={{ background: '#fb5533', padding: '5px 20px' }}>Mới nhất</button>
                <button type="button" className="primary border-0 outline-0 pointer color-white space-nowrap ml-10" style={{ background: '#fb5533', padding: '5px 20px' }}>Bán chạy</button>
                <Select className="ml-10" defaultValue="Giá" style={{ width: 200 }}>
                  <Option value="increase">Giá: thấp đến cao</Option>
                  <Option value="decrease">Giá: cao đến thấp</Option>
                </Select>
              </div>
              <div className="d-flex align-center">
                {/* <span>1/100</span>
                <div className="product-arrow d-flex align-center ml-10">
                  <span className="pointer line-height-0 bg-white" style={{ padding: '1rem' }}><LeftOutlined /></span>
                  <span className="pointer line-height-0 border-l-1 bg-white" style={{ padding: '1rem' }}><RightOutlined /></span>
                </div> */}
                <Pagination 
                  simple 
                  defaultPageSize={20} 
                  current={currentPagination} 
                  total={totalPage} 
                  onChange={onChangePagination} 
                />
              </div>
            </div>

            <div className="row">
              {
                productsCom
                  && productsCom.length
                  ? productsCom.map(product => {
                    return <React.Fragment key={product._id}>
                      <div className="col-md-6 col-lg-3">
                        <ProductComponent product={product} />
                      </div>
                    </React.Fragment>
                  })
                  : <div className="text-center col-md-12">Product not found</div>
              }
            </div>
          </div>
        </div>
      </div>
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
    getCategoriesAction: getCategories,
    setLoadingAction: setLoading
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);