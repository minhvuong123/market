import React, { useEffect } from 'react';
import { Select, Input, Button } from 'antd';

import { RightOutlined } from '@ant-design/icons';

import api from 'api';
import { getProduct, saveOrder } from 'redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from "react-slick";
import { v1 as uuid } from 'uuid';

const { Option } = Select;

function ProductDetailComponent({ match, getProductAction, product, saveOrderAction }) {
  const product_id = match.params.product;
  useEffect(() => {
    api.post('/products/product-id', { product_id }).then(function(res){
      getProductAction(res.data);
    })
    return () => {
      // component unmount
    }
  }, [product_id, getProductAction])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    draggable: false
  };

  function saveOrderCom() {
    const order = {
      order_id: uuid(),
      order_user: 'user',
      order_product: product,
      order_transport: {
        transport_from: "Viet Nam",
        transport_to: " US",
        transport_fee: "100.000 USD"
      },
      order_status: 'pending',
      order_amount: 0
    }
    
    api.post('/orders/add-order', { order }).then(function(result){
      const status = result.data.status;
      if (status && status === 'ok') {
        // handle event ...
        saveOrderAction(order);
      }
    })
  }

  
  return Object.keys(product).length !== 0 && (
    <div className="container mt-30">
      <div className="app-product-detail">
        <div className="d-flex p-20" style={{backgroundColor: '#fff'}}>
          <div className="product-review" style={{width: '40%', backgroundColor: '#fff'}}>
            <div className="review-big">
              <img src={`http://localhost:4000/static/${product.product_images[0]}`} alt="" />
            </div>
            <div className="review-small d-flex mt-10">
              <div style={{width: '100%'}}>
                <Slider {...settings}>
                  {
                    product.product_images.map( (image, index )  => (<div key={index} className="p-5" style={{minWidth: '15%', width: '15%'}}>
                                                                    <img src={`http://localhost:4000/static/${image}`} alt="" />
                                                                  </div>
                                                                )
                    )
                  }
                  </Slider>
                </div>
            </div>
          </div>
          <div className="product-order ml-20" style={{width: '60%', paddingTop: 55}}>
            <h3>{product.product_title}</h3>
            <div className="d-flex">
              <div className="product-detail-block">
                <span>2.3K</span>
                Đánh giá
              </div>
              <div className="product-detail-block">
                <span>4.7K</span>
                Đã bán
              </div>
            </div>

            <div>
                <span>đ {product.product_price}</span>
            </div>

            <div className="transform">
              <div className="d-flex">
                <span style={{width: '20%'}}>Vận chuyển</span>
                <div>
                  <div className="d-flex flex-column">
                    <span>Miễn phí vận chuyển</span>
                    <span>Miễn phí vận chuyển khi đơn đạt giá trị tối thiểu</span>
                  </div>
                  <div className="d-flex">
                    <span>Vận chuyển tới</span>
                    <Select className="ml-10" defaultValue="Vận chuyển" style={{ width: 200 }}>
                      <Option value="increase">Giá: thấp đến cao</Option>
                      <Option value="decrease">Giá: cao đến thấp</Option>
                    </Select>
                  </div>
                  <div className="d-flex">
                    <span>Phí vận chuyển</span>
                    <Select className="ml-10" defaultValue="Phí vận chuyển" style={{ width: 200 }}>
                      <Option value="increase">đ 100.000 - đ 200.000</Option>
                      <Option value="decrease">đ 200.000 - đ 300.000</Option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <span style={{width: '20%'}}>Số lượng</span>
                <div>
                  <Input
                      className="site-input-right"
                      style={{
                        width: 80,
                        textAlign: 'center',
                      }}
                      placeholder="Maximum"
                    />
                    <span>{product.product_amount} sản phẩm có sẳn</span>
                </div>
              </div>

              <div>
                <Button onClick={saveOrderCom} type="primary" danger>
                  Thêm vào giỏ hàng
                </Button>
                <Button className="ml-10" type="primary" danger>
                  Mua ngay
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-20 mt-20"  style={{backgroundColor: '#fff'}}>
            <div className="d-flex">
                <span style={{width: '10%'}}>Danh mục</span>
                <div>Shopee <RightOutlined /> Đồng Hồ <RightOutlined /> Đồng hồ nam <RightOutlined /> Đồng hồ điện tử</div>
            </div>
            <div className="d-flex">
                <span style={{width: '10%'}}>Chất liệu đây</span>
                <div>Cao su</div>
            </div>
            <div className="d-flex">
                <span style={{width: '10%'}}>Giới tính</span>
                <div>Unisex</div>
            </div>
            <div className="d-flex">
                <span style={{width: '10%'}}>Dạng mặt đồng hồ</span>
                <div>Chữ nhật</div>
            </div>
            <div className="d-flex">
                <span style={{width: '10%'}}>Kiểu khóa</span>
                <div>Khóa bấm</div>
            </div>
            <div className="d-flex">
                <span style={{width: '10%'}}>Chống nước</span>
                <div>Không</div>
            </div>
            <div className="d-flex">
                <span style={{width: '10%'}}>Chất liệu viền ngoài</span>
                <div>Cao su</div>
            </div>
            <div className="d-flex">
                <span style={{width: '10%'}}>Thương hiệu</span>
                <div>No brand</div>
            </div>
            <div className="d-flex">
                <span style={{width: '10%'}}>Kho hàng</span>
                <div>6457</div>
            </div>
            <div className="d-flex">
                <span style={{width: '10%'}}>Gữi đến</span>
                <div>HCM</div>
            </div>
        </div>
      </div>
      </div>
  )
}

function mapStateToProps({ productsReducer }, ownProps) {
  return {
    product: productsReducer.product
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    getProductAction: getProduct,
    saveOrderAction: (order) => saveOrder(order)
  }, dispatch);
}

export default  connect(mapStateToProps, mapDispatchToProps)(ProductDetailComponent);