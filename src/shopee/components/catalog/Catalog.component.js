import React, { useEffect } from 'react';
import { DownCircleOutlined, UnorderedListOutlined, FilterOutlined, HeartOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Checkbox, Input, Rate, Select  } from 'antd';
import ProductComponent from '../products/Product.component';

import {
  getProducts
} from '../../../redux/actions';

import api from '../../../api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { Option } = Select;

function CatalogComponent({ match, getProductsAction, products }) {
  useEffect(() => {
    if (match.params.category) {
      api.post('/products', { category : match.params.category }).then(function(res){
        getProductsAction(res.data);
      })
    } else if (match.params.category_sub) {
      api.post('/products', { category_sub : match.params.category_sub }).then(function(res){
        getProductsAction(res.data);
      })
    }
    return () => {
      // component unmount
    }
  }, [match.params.category, match.params.category_sub, getProductsAction])
  return (
    <div className="container">
      <div className="app-catalog d-flex" style={{marginTop: 30}}>
        <div className="catalog-wrap border-r pr-10" style={{minWidth: 200}}>
          <div className="catalog-list">
            <h3><UnorderedListOutlined />Tất cả danh mục</h3>
            <div className="catalog-block-content d-flex flex-column">
              <a href="/">Laptop</a>
              <a href="/">Máy tính bàn</a>
              <a href="/">Linh kiện máy tính</a>
              <a href="/">Chuột, bàn phím</a>
              <a href="/">Thiết bị mạng</a>
              <a href="/">Thêm <DownCircleOutlined/></a>
            </div>
          </div>

          <div className="catalog-filter" style={{marginTop: 30}}>
            <h3><FilterOutlined />Bộ lọc tìm kiếm</h3>
            <div>
              <h4>Nơi bán</h4>
              <div className="catalog-filter-content d-flex flex-column">
                <Checkbox.Group>
                  <span className="d-block"> <Checkbox value="A">TP.Hồ chí minh</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">Hà nội</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">Thái nguyên</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">Vĩnh phúc</Checkbox></span>
                </Checkbox.Group>
                <a href="/">Thêm <DownCircleOutlined/></a>
              </div>
            </div>

            <div style={{marginTop: 15}}>
              <h4>Đơn vị vận chuyển</h4>
              <div className="catalog-filter-content d-flex flex-column">
                <Checkbox.Group>
                  <span className="d-block"> <Checkbox value="A">Shopee Express</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">NowShip</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">Ninja Van</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">J&T Express</Checkbox></span>
                </Checkbox.Group>
                <a href="/">Thêm <DownCircleOutlined/></a>
              </div>
            </div>

            <div style={{marginTop: 15}}>
              <h4>Thương hiệu</h4>
              <div className="catalog-filter-content d-flex flex-column">
                <Checkbox.Group>
                  <span className="d-block"> <Checkbox value="A">No Brand</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">TP-Link</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">Canon</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">Marvo</Checkbox></span>
                </Checkbox.Group>
                <a href="/">Thêm <DownCircleOutlined/></a>
              </div>
            </div>

            <div style={{marginTop: 15}}>
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
            </div>

            <div style={{marginTop: 15}}>
              <h4>Tình trạng</h4>
              <div className="catalog-filter-content d-flex flex-column">
                <Checkbox.Group>
                  <span className="d-block"> <Checkbox value="A">Sản phẩm mới</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">Sản phẩm đã dùng</Checkbox></span>
                </Checkbox.Group>
              </div>
            </div>

            <div style={{marginTop: 15}}>
              <h4>Bảng đánh giá</h4>
              <div className="catalog-filter-content d-flex flex-column">
                <span> <Rate disabled defaultValue={5} character={<HeartOutlined />} /></span>
                <span> <Rate disabled defaultValue={4} character={<HeartOutlined />} /></span>
                <span> <Rate disabled defaultValue={3} character={<HeartOutlined />} /></span>
                <span> <Rate disabled defaultValue={2} character={<HeartOutlined />} /></span>
                <span> <Rate disabled defaultValue={1} character={<HeartOutlined />} /></span>
              </div>
            </div>

            <div style={{marginTop: 15}}>
              <h4>Dịch vụ khuyến mãi</h4>
              <div className="catalog-filter-content d-flex flex-column">
                <Checkbox.Group>
                  <span className="d-block"> <Checkbox value="A">Freeship Xtra</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">Hoàn xu Xtra</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">Đang giảm giá</Checkbox></span>
                  <span className="d-block"> <Checkbox value="A">Miễn phí vận chuyển</Checkbox></span>
                </Checkbox.Group>
                <a href="/">Thêm <DownCircleOutlined/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="catalog-product flex-grow pl-10 pr-10">
            <div className="catalog-product-sort d-flex justify-between">
              <div>
                  <span>Sắp xếp theo</span>
                  <button type="button" className="primary p-5 border-0 outline-0 pointer color-white pl-10 pr-10 ml-10" style={{background: '#fb5533'}}>Phổ biến</button>
                  <button type="button" className="primary p-5 border-0 outline-0 pointer color-white pl-10 pr-10 ml-10" style={{background: '#fb5533'}}>Mới nhất</button>
                  <button type="button" className="primary p-5 border-0 outline-0 pointer color-white pl-10 pr-10 ml-10" style={{background: '#fb5533'}}>Bán chạy</button>
                  <Select className="ml-10" defaultValue="Giá" style={{ width: 200 }}>
                    <Option value="increase">Giá: thấp đến cao</Option>
                    <Option value="decrease">Giá: cao đến thấp</Option>
                  </Select>
              </div>
              <div>
                <span>1/100</span>
                <div className="product-arrow d-inline-block ml-20">
                    <span className="pointer" style={{backgroundColor: "#fff", padding: '.5rem 1rem'}}><LeftOutlined /></span>
                    <span className="pointer ml-5" style={{backgroundColor: "#fff", padding: '.5rem 1rem'}}><RightOutlined /></span>
                </div>
              </div>
            </div>

            <div className="d-flex justify-between flex-wrap mt-20">
              {
                products && products.map((product, index) =>  <ProductComponent 
                                                                key={product.product_id} 
                                                                product_id={product.product_id} 
                                                                product_title={product.product_title} 
                                                                product_images={product.product_images}
                                                                product_category={product.product_category} 
                                                              />)
              }
            </div>
        </div>
      </div>
      </div>
  )
}


function mapStateToProps({ productsReducer }, ownProps) {
  return {
    products: productsReducer.products
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    getProductsAction: getProducts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogComponent);