import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      currentIndex += 1;
      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 70);

    return () => clearInterval(intervalId);
  }, [text]);

  return <p>{displayText}</p>;
};

function createSlide() {
  return (
    <SwiperSlide className="swiperP">

      <div className="carouselText">
        <h2>David z Webik</h2>
        
        <p>
        Naprostá spokojenost, doporučuji. Konečně mám webkterý je bez chyby ..
          <Link to="/Referenc">
            <p className="referenceLinkP">Zobrazit celou recenzi</p>
          </Link>
        </p>
      </div>
    </SwiperSlide>
  );
}
function createSlide2() {
  return (
    <SwiperSlide className="swiperP">
      <div className="carouselText">
        <h2>Spokojenost</h2>
        <p>Věděla že paprika je s měkým I o tom jsem neměla tušení</p>
        <Link to="/Referenc">
          <p className="referenceLinkP">Zobrazit celou recenzi</p>
        </Link>
      </div>
    </SwiperSlide>
  );
}
function createSlide3() {
  return (
    <SwiperSlide className="swiperP">
      <div className="carouselText">
        <h2>Anna z Moje bota</h2>
        <p>
          Spolupráce byla super, s Barčou se skvěle komunikovalo
          <br /> a dokázala mi poradit když jsem si sama nebyla jistá ...
        </p>
        <Link to="/Referenc">
          <p className="referenceLinkP">Zobrazit celou recenzi</p>
        </Link>
      </div>
    </SwiperSlide>
  );
}
function SwiperCarus(props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3500 }}
      pagination={{ clickable: true }}
    >
      <div>
        {createSlide()}
        {createSlide2()}
        {createSlide3()}
      </div>
    </Swiper>
  );
}

export default SwiperCarus;
