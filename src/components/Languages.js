import React from 'react';
import { motion } from 'framer-motion';
import {Container } from '@mui/material';
import Slider from 'react-slick';

import { varFadeIn, varFadeInRight } from './animate';

import language1 from '../assets/languageIcons/ic_react.svg';
import language2 from '../assets/languageIcons/ic_js.svg';
import language3 from '../assets/languageIcons/ic_material.svg';
import language4 from '../assets/languageIcons/ic_html5.svg';
import language5 from '../assets/languageIcons/ic_java.svg';
import language6 from '../assets/languageIcons/ic_console.svg';
import language7 from '../assets/languageIcons/ic_javafx.svg';
import language8 from '../assets/languageIcons/ic_kotlin.svg';
import language9 from '../assets/languageIcons/ic_python.svg';

const languages = [language1, language2, language3, language4, language5, language6, language7, language8, language9];

function Languages() {

  const settings = {
    slidesToShow: 6,
    centerMode: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    centerPadding: '0',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 6 }
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 4 }
      }
    ]
  };

  return (
      <Slider {...settings}>
        {languages.map((language, index) =>
          <Container key={index} variants={varFadeIn}>
            <motion.img variants={varFadeInRight} src={language} width={55} height={55} />
          </Container>
        )}
      </Slider>
  );
}
export default Languages;