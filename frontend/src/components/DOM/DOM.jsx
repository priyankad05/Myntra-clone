import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DOM.css';
import banner_image from '../Assets/banner_image.jpeg'; // Ensure the image is correctly imported

const DOM = () => {
  const carouselImages = [
    { src: 'http://localhost:4000/images/design_1721030130837.png' },
    { src: 'http://localhost:4000/images/design_1721030355089.png' },
    { src: 'http://localhost:4000/images/design_1721030520521.png' },
    { src: 'http://localhost:4000/images/design_1721031932225.png' },
    { src: 'http://localhost:4000/images/design_1721031969038.png' },
    { src: 'http://localhost:4000/images/design_1721032029538.png', path: '/submitdesign' }
  ];

  return (
    <div className="dom">
      <Carousel interval={2000}>
        {carouselImages.map((img, index) => (
          <Carousel.Item key={index}>
            {img.path ? (
              <Link to={img.path}>
                <img
                  className="d-block w-100"
                  src={img.src}
                  alt={`slide-${index}`}
                />
              </Link>
            ) : (
              <img
                className="d-block w-100"
                src={img.src}
                alt={`slide-${index}`}
              />
            )}
          </Carousel.Item>
        ))}
      </Carousel>
      
      <div className="grid-items">
        <div className="grid-item">
          <Link to='/pants'>
            <img src='pant.jpg' alt="Pants" />
            <div className="category-title">Pants</div>
          </Link>
        </div>
        <div className="grid-item">
          <Link to='/tops'>
            <img src='topwear.jpg' alt="Tops" />
            <div className="category-title">Tops</div>
          </Link>
        </div>
        <div className="grid-item">
          <Link to='/dresses'>
            <img src='dresses.jpg' alt="Dresses" />
            <div className="category-title">Dresses</div>
          </Link>
        </div>
        <div className="grid-item">
          <Link to='/ethnic'>
            <img src='ethnicwear.jpg' alt="Ethnic Wear" />
            <div className="category-title">Ethnic Wear</div>
          </Link>
        </div>
      </div>
      
      <div className="designom">
        <h2>Check out the most trending designs</h2>
      </div>
    </div>
  );
}

export default DOM;
