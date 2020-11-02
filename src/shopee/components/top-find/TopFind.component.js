import React from 'react';

import { DownOutlined } from '@ant-design/icons';
import ProductComponent from 'shopee/components/products/Product.component';
import product from '../../assets/images/product.jpg';

function TopFindComponent() {
  return (
    <div className="app-top-find">
      <h3 className="text-center mt-30" style={{fontSize: 30}}>TÌM KIẾM HÀNG ĐẦU</h3>
      <div className="top-find-navs mt-30">
        <ul className="d-flex" style={{ backgroundColor: '#fff' }}>
          <li><a className="d-inline-block" style={{ padding: '1.5rem 1.86rem 1.1rem 1.86rem', fontSize: '1.6rem', borderBottom: '4px solid #ee4d2d', color: '#ee4d2d' }} href="/">Dây Buộc Tóc Hàn Quốc</a></li>
          <li><a className="d-inline-block" style={{ padding: '1.5rem 1.86rem 1.1rem 1.86rem', fontSize: '1.6rem' }} href="/">Xốp Dán Tường Giả Gạch</a></li>
          <li><a className="d-inline-block" style={{ padding: '1.5rem 1.86rem 1.1rem 1.86rem', fontSize: '1.6rem' }} href="/">Quần Lót Nữ Cotton</a></li>
          <li><a className="d-inline-block" style={{ padding: '1.5rem 1.86rem 1.1rem 1.86rem', fontSize: '1.6rem' }} href="/">Quần Tây Nam</a></li>
          <li><a className="d-inline-block" style={{ padding: '1.5rem 1.86rem 1.1rem 1.86rem', fontSize: '1.6rem' }} href="/">Sạc Dự Phòng</a></li>
          <li><a className="d-inline-block" style={{ padding: '1.5rem 1.86rem 1.1rem 1.86rem', fontSize: '1.6rem' }} href="/">Giấy Ăn Gấu Trúc</a></li>
          <li style={{ position: "relative" }}>
            <a className="d-inline-block" style={{ padding: '1.5rem 1.86rem 1.1rem 1.86rem', fontSize: '1.6rem' }} href="/">Xêm thêm <DownOutlined /></a>
            <ul className="d-flex flex-wrap" style={{ position: "absolute", top: '100%', right: -2, zIndex: 1000, backgroundColor: '#fff', width: 400, boxShadow: '0px 1px 2px 1px #bab7b7' }}>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem', color: '#ee4d2d' }} href="/">Dây Buộc Tóc Hàn Quốc</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Xốp Dán Tường Giả Gạch</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Quần Lót Nữ Cotton</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Quần Tây Nam</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Sạc Dự Phòng</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Giấy Ăn Gấu Trúc</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Dung Dịch Vệ Sinh Phụ Nữ</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Dép NỮ</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Ốp Lưng Iphone</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Ví Nữ Mini</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Compo Móc Dán Tường</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Áo Thun Nam</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Tai Nghe Bluetooth</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Xốp Dán Tường Cách Âm</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Sơ Mi Nam</a></li>
              <li style={{ width: '50%' }}><a style={{ padding: '.5rem 1rem' }} href="/">Kẽ Mắt Nước</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="d-flex justify-between flex-wrap mt-20">
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
        <ProductComponent image={product} width={20} ></ProductComponent>
      </div>
    </div>
  )
}

export default TopFindComponent;