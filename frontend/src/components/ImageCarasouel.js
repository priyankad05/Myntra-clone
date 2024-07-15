import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './ImageCarousel.css'; // Create this CSS file for custom styling

function ImageCarousel() {
    return (
        <div style={{ margin: '20px auto', maxWidth: '1200px' }}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="frontend\public\carasouel\1.png" alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="frontend\public\carasouel\2.png" alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="frontend\public\carasouel\3.png" alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="frontend\public\carasouel\4.png" alt="Slide 3" />
                </SwiperSlide>
                {/* Add more slides as needed */}
            </Swiper>
        </div>
    );
}

export default ImageCarousel;