// import React from 'react';
// import HeaderComponent from './header/Header.component';
// import ProductComponent from './profuct/Product.component';
// import ShortProductComponent from './profuct/short/ShortProduct.component';
// import BrandComponent from './brand/Brand.component';
// import HorizontalProductComponent from './profuct/horizontal/HorizontalProduct.component';
// // import ProductDetailComponent from './profuct/detail/ProductDetail.component';
// // import CardDetailComponent from './profuct/card/CardDetail.component'; 
// // import CatalogComponent from './catalog/Catalog.component';
// import { BackTop, Carousel } from 'antd';
// import { UpOutlined, RightCircleOutlined } from '@ant-design/icons';

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // images
// import extra from '../assets/images/extra.png';
// import product from '../assets/images/product.jpg';
// import circleProduct from '../assets/images/circle-product.png';
// import balo from '../assets/images/balo.jpg';

// // mall images
// import mall_1 from '../assets/images/mall/mall_1.jpg';
// import mall_2 from '../assets/images/mall/mall_2.jpg';
// import mall_3 from '../assets/images/mall/mall_3.jpg';
// import mall_4 from '../assets/images/mall/mall_4.jpg';

// // trend images
// import trend_1 from '../assets/images/mall/trend_1.jpg';
// import trend_2 from '../assets/images/mall/trend_2.jpg';
// import trend_3 from '../assets/images/mall/trend_3.jpg';
// import trend_4 from '../assets/images/mall/trend_4.jpg';

// // trend small
// import trend_small_1 from '../assets/images/mall/trend_small_1.jpg';
// import trend_small_2 from '../assets/images/mall/trend_small_2.jpg';
// import TopFindComponent from './top-find/TopFind.component';

// function App() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true
//   };
//   const settings1 = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <div className="shop-app">
//       <HeaderComponent></HeaderComponent>
//       {/* Home: start */}
//       <div className="container" style={{ marginTop: '30px' }}>
//         <div className="d-flex">
//           <div style={{ width: '66.66%' }}>
//             <Carousel autoplay>
//               <div>
//                 <img src="https://cf.shopee.vn/file/3d2a388b898837e816240bde1a89ea4a_xxhdpi" alt="" />
//               </div>
//               <div>
//                 <img src="https://cf.shopee.vn/file/5906b19a3b04fbb2f43f741a466ca3f2_xxhdpi" alt="" />
//               </div>
//             </Carousel>
//           </div>
//           <div style={{ width: '33.33%' }}>
//             <div>
//               <img src="https://cf.shopee.vn/file/1f412a5d4f5ce6df349efb17e29c9aea_xhdpi" alt="" />
//             </div>
//             <div>
//               <img src="https://cf.shopee.vn/file/4d683996c2f52b6cc0a50d6867461f70_xhdpi" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container  mt-30">
//         <div className="d-flex flex-wrap justify-around">
//           <BrandComponent image={extra} label="Freeship Xtra"></BrandComponent>
//           <BrandComponent image={extra} label="Hàng Quốc Tế"></BrandComponent>
//           <BrandComponent image={extra} label="Hoàn Xu Đơn Bất Kỳ"></BrandComponent>
//           <BrandComponent image={extra} label="Săn Siêu Sale"></BrandComponent>
//           <BrandComponent image={extra} label="Shopee Premium"></BrandComponent>
//           <BrandComponent image={extra} label="Giảm Giá Trăm Tỷ"></BrandComponent>
//           <BrandComponent image={extra} label="Shopee Mum's Club"></BrandComponent>
//           <BrandComponent image={extra} label="Shopee Book Club"></BrandComponent>
//           <BrandComponent image={extra} label="Siêu Thị Điện Tử"></BrandComponent>
//         </div>
//       </div>
//       <div className="container  mt-30">
//         <h3>DANH MỤC</h3>
//         <div className="d-flex flex-wrap">
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//           <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//         </div>
//       </div>
//       <div className="container  mt-30">
//         <div className="d-flex flex-wrap justify-around">
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//         </div>
//       </div>
//       <div className="container mt-30">
//         <div className="app-header d-flex justify-between pt-10 pb-10">
//           <div className="d-flex">
//             <p className="border-r" style={{ lineHeight: 1, padding: "0 1rem" }}>SHOPPE MALL</p>
//             <p style={{ lineHeight: 1, padding: "0 1rem" }}>7 ngày miễn phí trả hàng</p>
//             <p style={{ lineHeight: 1, padding: "0 1rem" }}>Hàng chính hãng 90%</p>
//             <p style={{ lineHeight: 1, padding: "0 1rem" }}>Miễn phí vận chuyển</p>
//           </div>
//           <div className="d-flex">
//             <a style={{ lineHeight: 1 }} href="/">
//               <span className="mr-10">Xem tất cả</span>
//               <RightCircleOutlined />
//             </a>
//           </div>
//         </div>
//         <div className="mall-slide d-flex">
//           <div className="mall-slide-left" style={{ width: 300 }}>
//             <Slider {...settings}>
//               <div>
//                 <a href="/">
//                   <img src={mall_1} alt="" />
//                 </a>
//               </div>
//               <div>
//                 <a href="/">
//                   <img src={mall_2} alt="" />
//                 </a>
//               </div>
//               <div>
//                 <a href="/">
//                   <img src={mall_3} alt="" />
//                 </a>
//               </div>
//               <div>
//                 <a href="/">
//                   <img src={mall_4} alt="" />
//                 </a>
//               </div>
//             </Slider>
//           </div>
//           <div className="mall-slide-right p-20" style={{ width: 870 }}>
//             <Slider {...settings1}>
//               <div className="d-flex flex-wrap">
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>

//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//               </div>
//               <div className="d-flex flex-wrap">
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>

//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//                 <div className="mt-10">
//                   <ShortProductComponent image={circleProduct} label="áo"></ShortProductComponent>
//                 </div>
//               </div>
//             </Slider>
//           </div>
//         </div>
//       </div>
//       <div className="container mt-30">
//         <h3>XU HƯỚNG TÌM KIẾM</h3>
//         <div className="d-flex flex-wrap">
//           <HorizontalProductComponent image={balo}></HorizontalProductComponent>
//           <HorizontalProductComponent image={balo}></HorizontalProductComponent>
//           <HorizontalProductComponent image={balo}></HorizontalProductComponent>
//           <HorizontalProductComponent image={balo}></HorizontalProductComponent>
//           <HorizontalProductComponent image={balo}></HorizontalProductComponent>
//         </div>
//       </div>
//       <div className="container mt-30">
//         <h3>TÌM KIẾM HÀNG ĐẦU</h3>
//         <div>
//           <Slider {...settings1}>
//             <div className="d-flex flex-wrap">
//               <div className="d-flex ml-20">
//                 <div style={{ width: 180, height: 180, background: '#000' }}>
//                   <img src={trend_1} alt="" />
//                 </div>
//                 <div className="d-flex flex-column">
//                   <div style={{ width: 90, height: 90, background: 'grey' }}>
//                     <img src={trend_small_1} alt="" />
//                   </div>
//                   <div style={{ width: 90, height: 90, background: 'yellow' }}>
//                     <img src={trend_small_2} alt="" />
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex ml-20">
//                 <div style={{ width: 180, height: 180, background: '#000' }}>
//                   <img src={trend_2} alt="" />
//                 </div>
//                 <div className="d-flex flex-column">
//                   <div style={{ width: 90, height: 90, background: 'grey' }}>
//                     <img src={trend_small_1} alt="" />
//                   </div>
//                   <div style={{ width: 90, height: 90, background: 'yellow' }}>
//                     <img src={trend_small_2} alt="" />
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex ml-20">
//                 <div style={{ width: 180, height: 180, background: '#000' }}>
//                   <img src={trend_3} alt="" />
//                 </div>
//                 <div className="d-flex flex-column">
//                   <div style={{ width: 90, height: 90, background: 'grey' }}>
//                     <img src={trend_small_1} alt="" />
//                   </div>
//                   <div style={{ width: 90, height: 90, background: 'yellow' }}>
//                     <img src={trend_small_2} alt="" />
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex ml-20">
//                 <div style={{ width: 180, height: 180, background: '#000' }}>
//                   <img src={trend_4} alt="" />
//                 </div>
//                 <div className="d-flex flex-column">
//                   <div style={{ width: 90, height: 90, background: 'grey' }}>
//                     <img src={trend_small_1} alt="" />
//                   </div>
//                   <div style={{ width: 90, height: 90, background: 'yellow' }}>
//                     <img src={trend_small_2} alt="" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex flex-wrap">
//               <div className="d-flex ml-20">
//                 <div style={{ width: 180, height: 180, background: '#000' }}>
//                   <img src={trend_1} alt="" />
//                 </div>
//                 <div className="d-flex flex-column">
//                   <div style={{ width: 90, height: 90, background: 'grey' }}>
//                     <img src={trend_small_1} alt="" />
//                   </div>
//                   <div style={{ width: 90, height: 90, background: 'yellow' }}>
//                     <img src={trend_small_2} alt="" />
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex ml-20">
//                 <div style={{ width: 180, height: 180, background: '#000' }}>
//                   <img src={trend_2} alt="" />
//                 </div>
//                 <div className="d-flex flex-column">
//                   <div style={{ width: 90, height: 90, background: 'grey' }}>
//                     <img src={trend_small_1} alt="" />
//                   </div>
//                   <div style={{ width: 90, height: 90, background: 'yellow' }}>
//                     <img src={trend_small_2} alt="" />
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex ml-20">
//                 <div style={{ width: 180, height: 180, background: '#000' }}>
//                   <img src={trend_3} alt="" />
//                 </div>
//                 <div className="d-flex flex-column">
//                   <div style={{ width: 90, height: 90, background: 'grey' }}>
//                     <img src={trend_small_1} alt="" />
//                   </div>
//                   <div style={{ width: 90, height: 90, background: 'yellow' }}>
//                     <img src={trend_small_2} alt="" />
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex ml-20">
//                 <div style={{ width: 180, height: 180, background: '#000' }}>
//                   <img src={trend_4} alt="" />
//                 </div>
//                 <div className="d-flex flex-column">
//                   <div style={{ width: 90, height: 90, background: 'grey' }}>
//                     <img src={trend_small_1} alt="" />
//                   </div>
//                   <div style={{ width: 90, height: 90, background: 'yellow' }}>
//                     <img src={trend_small_2} alt="" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Slider>
//         </div>
//       </div>
//       <div className="container mt-30">
//         <h3>Gợi ý hôm nay</h3>
//         <div className="d-flex flex-wrap justify-around">
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//           <ProductComponent image={product} width={16.67} ></ProductComponent>
//         </div>
//       </div>
//       {/* Home: end */}
//       {/* top find: start */}
//       {/* <div className="container">
//         <TopFindComponent></TopFindComponent>
//       </div> */}
//       {/* top find: end */}
//       <footer className="mt-30" style={{ borderTop: '4px solid #ee4d2d', backgroundColor: '#fff', color: 'rgba(0,0,0,.54)' }}>
//         <div className="container">
//           <div className="mt-30">
//             <h3>DANH MỤC</h3>
//             <div className="d-flex">
//               <div style={{ width: "20%" }}>
//                 <div>
//                   <h4>THỜI TRANG NAM</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>NHÀ CỬA & ĐỜI SỐNG</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>ĐỒNG HỒ</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//               </div>

//               <div style={{ width: "20%" }}>
//                 <div>
//                   <h4>THỜI TRANG NỮ</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>MÁY TINH & LAPTOP</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>TÚI VÍ</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>THỂ THAO & DU LỊCH</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//               </div>

              
//               <div style={{ width: "20%" }}>
//                 <div>
//                   <h4>ĐIỆN THOẠI & PHỤ KIÊN</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>SỨC KHỎE & SẮC ĐẸP</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>GIẦY DÉP NAM</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>VOUCHER & DỊCH VỤ</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//               </div>


//               <div style={{ width: "20%" }}>
//                 <div>
//                   <h4>MẸ & BÉ</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>MÁY ANH & MÁY QUAY PHIM</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>PHỤ KIỆN THỜI TRANG</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>Ô TÔ - XE MÁY - XE ĐẠP</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//               </div>


//               <div style={{ width: "20%" }}>
//                 <div>
//                   <h4>THIẾT BỊ ĐIỆN TỬ</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>GIẦY DÉP NỮ</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>THIẾT BỊ ĐIỆN GIA DỤNG</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h4>NHÀ SÁCH ONLINE</h4>
//                   <div>
//                     <a href="/">Áo thun</a> | <a href="/">Áo sơ mi</a> | <a href="/">Áo khoác & Áo vest</a> | <a href="/">Áo nỉ/ Áo len</a> | <a href="/">Đồ bộ/ Đồ mặc nhà</a>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </footer>
//       {/* catalog: start */}
//       {/* <div className="container">
//         <CatalogComponent></CatalogComponent>
//       </div> */}
//       {/* catalog: end */}
//       {/* product detail: start */}
//       {/* <div className="container mt-30">
//         <ProductDetailComponent></ProductDetailComponent>
//       </div> */}
//       {/* product detail: end */}
//       {/* card detail: start */}
//       {/* <div className="container">
//         <CardDetailComponent></CardDetailComponent>
//         <div className="maybe-favour mt-30">
//           <h3>CÓ THỂ BẠN CŨNG THÍCH</h3>
//           <div>
//             <ProductComponent image={product} ></ProductComponent>
//             <ProductComponent image={product} ></ProductComponent>
//             <ProductComponent image={product} ></ProductComponent>
//             <ProductComponent image={product} ></ProductComponent>
//             <ProductComponent image={product} ></ProductComponent>
//           </div>
//         </div>
//         <div className="ever-review mt-30">
//           <h3>VỪA XEM</h3>
//           <div className="bg-white pl-20 pr-20">
//             <ShortProductComponent image={product}price={180000} ></ShortProductComponent>
//           </div>
//         </div>
//       </div> */}
//       {/* card detail: end */}
//       <BackTop>
//         <div className="d-flex justify-center align-center radius" style={{ width: 50, height: 50, backgroundColor: '#fff' }}>
//           <UpOutlined />
//         </div>
//       </BackTop>
//     </div>
//   )
// }

// export default App;

import HeaderComponent from 'shopee/components/header/Header.component';
import React from 'react';
import { Link } from 'react-router-dom';
import Routes , { RenderRoutes } from '../../routes/routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from 'shopee/containers/home/Home.component';

function displayRouteMenu(routes) {
  function singleRoute(route) {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key} ({route.path})
        </Link>
      </li>
    );
  }
  return (
    <ul>
      {routes.map(route => {
          if (route.routes) {
            return (
              <React.Fragment key={route.key}>
                {displayRouteMenu(route.routes)}
              </React.Fragment>
            );
          }
          return singleRoute(route);
        }
      )}
    </ul>
  );
}

function App() {
  return (
    <div className="shop-app">
      <HeaderComponent></HeaderComponent>
      <RenderRoutes routes={Routes} />
    </div>
    // <div style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
    //   <div style={{ flex: 0.3, backgroundColor: "#f2f2f2" }}>
    //     {displayRouteMenu(Routes)}
    //   </div>
    //   <div>
    //     <RenderRoutes routes={Routes} />
    //   </div>
    // </div>
  )
}

export default App;