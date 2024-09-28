import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import CapitalDiversa from "../../img/CapitalDiversa.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* Heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://e-cafe.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={Sidebar} alt="Sidebar Project" style={{ height: '250px' }} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://cell.pfa.gop.pk/" target="_blank" rel="noopener noreferrer">
            <img src={Ecommerce} alt="Ecommerce Project" style={{ height: '250px' }} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://capitaldiversa.com/" target="_blank" rel="noopener noreferrer">
            <img src={CapitalDiversa} alt="Capital Diversa Project" style={{ height: '250px' }} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://pfa.gop.pk/" target="_blank" rel="noopener noreferrer">
            <img src={MusicApp} alt="Music App Project" style={{ height: '250px' }} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://app.pfa.gop.pk/" target="_blank" rel="noopener noreferrer">
            <img src={HOC} alt="HOC Project" style={{ height: '250px' }} />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
