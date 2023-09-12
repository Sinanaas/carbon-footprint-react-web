import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ArticlePictureSection.css';

import image1 from '../Assets/1.jpg';
import image2 from '../Assets/2.jpg';
import image3 from '../Assets/3.jpg';

const ArticlePictureSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500, // Set autoplay speed in milliseconds (3 seconds in this case)
  };

  const Url1 = 'https://news.microsoft.com/id-id/2022/03/22/a-journey-to-indonesias-2030-carbon-emission-reduction-target-with-cloud-and-ai/';
  const Url2 = 'https://www.esdm.go.id/en/media-center/news-archives/indonesia-cuts-1037-million-tonnes-of-carbon-emissions-from-power-plants-in-2021';
  const Url3 = 'https://www.thejakartapost.com/culture/2023/01/17/jakarta-aims-to-achieve-net-zero-emissions-by-2050.html';

  return (
    <div className="ArticlePictureSection">
      <Slider {...settings}>
        <div>
          <div className="carousel-item">
            <a href={Url1} target="_blank" rel="noopener noreferrer">
              <img
                src={image1}
                alt="Illustration for the first article"
                className="carousel-image"
              />
            </a>
            <p className="image-description">A Journey to Indonesia’s 2030 Carbon Emission Reduction Target with Cloud and AI</p>
          </div>
        </div>

        <div>
          <div className="carousel-item">
            <a href={Url2} target="_blank" rel="noopener noreferrer">
              <img
                src={image2}
                alt="Illustration for the second article"
                className="carousel-image"
              />
            </a>
            <p className="image-description">Indonesia Cuts 10.37 Million Tonnes of Carbon Emissions from Power Plants in 2021</p>
          </div>
        </div>

        <div>
          <div className="carousel-item">
            <a href={Url3} target="_blank" rel="noopener noreferrer">
              <img
                src={image3}
                alt="Illustration for the third article"
                className="carousel-image"
              />
            </a>
            <p className="image-description">Jakarta aims to achieve net-zero emissions by 2050</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ArticlePictureSection;
