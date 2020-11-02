import React from 'react';

function BrandComponent({image, label}) {
  return (
    <a href="/">
      <div className="app-brand ml-5 mr-5 mt-10">
        <div 
          className="brand-icon" 
          style={{
            width: 50, 
            height: 50,
            margin: 'auto',
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}/>
        <p className="text-center" style={{maxWidth: '100px'}}>{label}</p>
      </div>
    </a>
  )
}

export default BrandComponent;