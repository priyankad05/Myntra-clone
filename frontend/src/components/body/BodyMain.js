import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { brandImg, imgArr } from './imgUrl';
import { offerImg } from './imgUrl';
import Timer from './Timer';

function BodyMain() {
  const carouselImages = [
    'http://localhost:4000/images/design_1721030130837.png',
    'http://localhost:4000/images/design_1721030355089.png',
    'http://localhost:4000/images/design_1721030520521.png'
  ];

  return (
    <div className='col'>
      <Timer />
      
      <Carousel interval={2000}>
        {carouselImages.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={img}
              height={'350px'}
              alt={`slide-${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <img className='col-11 mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
        height={'150px'} alt='banner' />

      <div className='col-12 p-2'>
        {imgArr.map((val, index) => (
          <img key={index} src={val.img} className='col-2' alt='shradda' />
        ))}
      </div>

      <img className='col-11 mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg'
        height={'100px'} alt='banner' />

      <div className='col-12 p-2'>
        {offerImg.map((val, index) => (
          <img key={index} src={val.img} className='col-2' alt='shradda' />
        ))}
      </div>

      <img className='col-11 mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
        height={'150px'} alt='banner' />

      <div className='col-12 p-2'>
        {imgArr.map((val, index) => (
          <img key={index} src={val.img} className='col-2' alt='shradda' />
        ))}
      </div>

      <img className='col-11 mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/3e80c999-94aa-4b59-befb-e49a33c474991646993148082-Most-Loved-Brands.jpg'
        height={'100px'} alt='banner' />

      <div className='col-12 p-2 mb-3'>
        {brandImg.map((val, index) => (
          <img key={index} src={val.img} className='col-2' alt='shradda' />
        ))}
      </div>
    </div>
  );
}

export default BodyMain;
