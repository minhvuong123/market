import BrandComponent from 'shopee/components/brand/Brand.component';
import ShortProductComponent from 'shopee/components/products/short/ShortProduct.component';
import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import Slider from "react-slick";
import { RightCircleOutlined } from '@ant-design/icons';

// images
import extra from 'assets/images/extra.png';

// mall images
import mall_1 from 'assets/images/mall/mall_1.jpg';
import mall_2 from 'assets/images/mall/mall_2.jpg';
import mall_3 from 'assets/images/mall/mall_3.jpg';
import mall_4 from 'assets/images/mall/mall_4.jpg';

// trend images
import trend_1 from 'assets/images/mall/trend_1.jpg';
import trend_2 from 'assets/images/mall/trend_2.jpg';
import trend_3 from 'assets/images/mall/trend_3.jpg';
import trend_4 from 'assets/images/mall/trend_4.jpg';

// trend small
import trend_small_1 from 'assets/images/mall/trend_small_1.jpg';
import trend_small_2 from 'assets/images/mall/trend_small_2.jpg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from 'api';
import { 
  getCategories 
} from 'redux/actions';

function Home({ categories, getCategoriesAction }) {
  useEffect(() => {
    api.get('/categories').then(function(res){
      getCategoriesAction(res.data);
    })
    return () => {
      // component unmount
    }
  }, [getCategoriesAction])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: '30px' }}>
        <div className="d-flex">
          <div style={{ width: '66.66%' }}>
            <Carousel autoplay>
              <div>
                <img src="https://cf.shopee.vn/file/3d2a388b898837e816240bde1a89ea4a_xxhdpi" alt="" />
              </div>
              <div>
                <img src="https://cf.shopee.vn/file/5906b19a3b04fbb2f43f741a466ca3f2_xxhdpi" alt="" />
              </div>
            </Carousel>
          </div>
          <div style={{ width: '33.33%' }}>
            <div>
              <img src="https://cf.shopee.vn/file/1f412a5d4f5ce6df349efb17e29c9aea_xhdpi" alt="" />
            </div>
            <div>
              <img src="https://cf.shopee.vn/file/4d683996c2f52b6cc0a50d6867461f70_xhdpi" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container  mt-30">
        <div className="d-flex flex-wrap justify-around">
          <BrandComponent image={extra} label="Freeship Xtra"></BrandComponent>
          <BrandComponent image={extra} label="Hàng Quốc Tế"></BrandComponent>
          <BrandComponent image={extra} label="Hoàn Xu Đơn Bất Kỳ"></BrandComponent>
          <BrandComponent image={extra} label="Săn Siêu Sale"></BrandComponent>
          <BrandComponent image={extra} label="Shopee Premium"></BrandComponent>
          <BrandComponent image={extra} label="Giảm Giá Trăm Tỷ"></BrandComponent>
          <BrandComponent image={extra} label="Shopee Mum's Club"></BrandComponent>
          <BrandComponent image={extra} label="Shopee Book Club"></BrandComponent>
          <BrandComponent image={extra} label="Siêu Thị Điện Tử"></BrandComponent>
        </div>
      </div>
      <div className="container  mt-30">
        <h3>DANH MỤC</h3>
        <div className="d-flex flex-wrap">
          {
            categories && categories.length && categories.map(category =>{
              return  <ShortProductComponent key={category.category_id} category={category} />
            })
          }
        </div>
      </div>
      <div className="container  mt-30">
        <div className="d-flex flex-wrap justify-around">
          {/* <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent> */}
        </div>
      </div>
      <div className="container mt-30">
        <div className="app-header d-flex justify-between pt-10 pb-10">
          <div className="d-flex">
            <p className="border-r" style={{ lineHeight: 1, padding: "0 1rem" }}>SHOPPE MALL</p>
            <p style={{ lineHeight: 1, padding: "0 1rem" }}>7 ngày miễn phí trả hàng</p>
            <p style={{ lineHeight: 1, padding: "0 1rem" }}>Hàng chính hãng 90%</p>
            <p style={{ lineHeight: 1, padding: "0 1rem" }}>Miễn phí vận chuyển</p>
          </div>
          <div className="d-flex">
            <a style={{ lineHeight: 1 }} href="/">
              <span className="mr-10">Xem tất cả</span>
              <RightCircleOutlined />
            </a>
          </div>
        </div>
        <div className="mall-slide d-flex">
          <div className="mall-slide-left" style={{ width: 300 }}>
            <Slider {...settings}>
              <div>
                <a href="/">
                  <img src={mall_1} alt="" />
                </a>
              </div>
              <div>
                <a href="/">
                  <img src={mall_2} alt="" />
                </a>
              </div>
              <div>
                <a href="/">
                  <img src={mall_3} alt="" />
                </a>
              </div>
              <div>
                <a href="/">
                  <img src={mall_4} alt="" />
                </a>
              </div>
            </Slider>
          </div>
          <div className="mall-slide-right p-20" style={{ width: 870 }}>
            {/* <Slider {...settings1}>
              <div className="d-flex flex-wrap">
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>

                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
              </div>
              <div className="d-flex flex-wrap">
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>

                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
                <div className="mt-10">
                  <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
                </div>
              </div>
            </Slider> */}
          </div>
        </div>
      </div>
      <div className="container mt-30">
        <h3>XU HƯỚNG TÌM KIẾM</h3>
        <div className="d-flex flex-wrap">
          {/* <HorizontalProductComponent image={balo}></HorizontalProductComponent>
          <HorizontalProductComponent image={balo}></HorizontalProductComponent>
          <HorizontalProductComponent image={balo}></HorizontalProductComponent>
          <HorizontalProductComponent image={balo}></HorizontalProductComponent>
          <HorizontalProductComponent image={balo}></HorizontalProductComponent> */}
        </div>
      </div>
      <div className="container mt-30">
        <h3>TÌM KIẾM HÀNG ĐẦU</h3>
        <div>
          <Slider {...settings1}>
            <div className="d-flex flex-wrap">
              <div className="d-flex ml-20">
                <div style={{ width: 180, height: 180, background: '#000' }}>
                  <img src={trend_1} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <div style={{ width: 90, height: 90, background: 'grey' }}>
                    <img src={trend_small_1} alt="" />
                  </div>
                  <div style={{ width: 90, height: 90, background: 'yellow' }}>
                    <img src={trend_small_2} alt="" />
                  </div>
                </div>
              </div>
              <div className="d-flex ml-20">
                <div style={{ width: 180, height: 180, background: '#000' }}>
                  <img src={trend_2} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <div style={{ width: 90, height: 90, background: 'grey' }}>
                    <img src={trend_small_1} alt="" />
                  </div>
                  <div style={{ width: 90, height: 90, background: 'yellow' }}>
                    <img src={trend_small_2} alt="" />
                  </div>
                </div>
              </div>
              <div className="d-flex ml-20">
                <div style={{ width: 180, height: 180, background: '#000' }}>
                  <img src={trend_3} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <div style={{ width: 90, height: 90, background: 'grey' }}>
                    <img src={trend_small_1} alt="" />
                  </div>
                  <div style={{ width: 90, height: 90, background: 'yellow' }}>
                    <img src={trend_small_2} alt="" />
                  </div>
                </div>
              </div>
              <div className="d-flex ml-20">
                <div style={{ width: 180, height: 180, background: '#000' }}>
                  <img src={trend_4} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <div style={{ width: 90, height: 90, background: 'grey' }}>
                    <img src={trend_small_1} alt="" />
                  </div>
                  <div style={{ width: 90, height: 90, background: 'yellow' }}>
                    <img src={trend_small_2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap">
              <div className="d-flex ml-20">
                <div style={{ width: 180, height: 180, background: '#000' }}>
                  <img src={trend_1} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <div style={{ width: 90, height: 90, background: 'grey' }}>
                    <img src={trend_small_1} alt="" />
                  </div>
                  <div style={{ width: 90, height: 90, background: 'yellow' }}>
                    <img src={trend_small_2} alt="" />
                  </div>
                </div>
              </div>
              <div className="d-flex ml-20">
                <div style={{ width: 180, height: 180, background: '#000' }}>
                  <img src={trend_2} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <div style={{ width: 90, height: 90, background: 'grey' }}>
                    <img src={trend_small_1} alt="" />
                  </div>
                  <div style={{ width: 90, height: 90, background: 'yellow' }}>
                    <img src={trend_small_2} alt="" />
                  </div>
                </div>
              </div>
              <div className="d-flex ml-20">
                <div style={{ width: 180, height: 180, background: '#000' }}>
                  <img src={trend_3} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <div style={{ width: 90, height: 90, background: 'grey' }}>
                    <img src={trend_small_1} alt="" />
                  </div>
                  <div style={{ width: 90, height: 90, background: 'yellow' }}>
                    <img src={trend_small_2} alt="" />
                  </div>
                </div>
              </div>
              <div className="d-flex ml-20">
                <div style={{ width: 180, height: 180, background: '#000' }}>
                  <img src={trend_4} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <div style={{ width: 90, height: 90, background: 'grey' }}>
                    <img src={trend_small_1} alt="" />
                  </div>
                  <div style={{ width: 90, height: 90, background: 'yellow' }}>
                    <img src={trend_small_2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="container mt-30">
        <h3>Gợi ý hôm nay</h3>
        <div className="d-flex flex-wrap justify-around">
          {/* <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent>
          <ProductComponent image={product} width={16.67} ></ProductComponent> */}
        </div>
      </div>
    </React.Fragment>
  )
}

function mapStateToProps({ categoriesReducer }, ownProps) {
  return {
    categories: categoriesReducer.categories
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    getCategoriesAction: getCategories
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);