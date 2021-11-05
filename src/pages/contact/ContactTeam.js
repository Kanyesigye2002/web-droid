import { useRef } from 'react';
import Slider from 'react-slick';

// material
import { useTheme } from '@mui/material/styles';
import { Box, Container, useMediaQuery } from '@mui/material';

import { varFadeIn } from '../../components/animate';
import { CarouselControlsArrowsBasic2 } from '../../components/carousel';
import UserCard from './UserCard';
import Allan1 from '../../assets/images/members/Allan1.jpg';
import mock_avatar from '../../assets/images/members/mock_avatar.jpg';
import Jordan from '../../assets/images/members/jordan2.jpeg';
import Enock from '../../assets/images/members/Enock.jpg';
import Anitah from '../../assets/images/members/Anitah.jpg';
import Teddy1 from '../../assets/images/members/Teddy1.jpg';

// ----------------------------------------------------------------------

const MEMBERS = [
  {
    id: 1,
    name: "Kanyesigye Allan",
    role: "Full Stack Developer",
    phoneNumber: '0752331807',
    avatar: Allan1
  },
  {
    id: 2,
    name: "Philly Banks",
    role: "Marketing Director",
    phoneNumber: '0752331807',
    avatar: mock_avatar
  },
  {
    id: 3,
    name: "Mulungi Jordan",
    role: "UX Designer",
    phoneNumber: '0752331807',
    avatar: Jordan
  },
  {
    id: 4,
    name: "Twikirize Enock",
    role: "Production Manager",
    phoneNumber: '0752331807',
    avatar: Enock
  },
  {
    id: 5,
    name: "Ampumuza Anita",
    role: "Support Team",
    phoneNumber: '0752331807',
    avatar: Anitah
  },
  {
    id: 6,
    name: "Teddy",
    role: "Marketing Team",
    phoneNumber: '0752331807',
    avatar: Teddy1
  },
]

export default function AboutTeam() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    slidesToShow: 2,
    centerMode: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    centerPadding: '0 0px',
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Slider ref={carouselRef} {...settings}>
        {MEMBERS.map((user) => (
          <Container key={user.id} variants={varFadeIn} sx={{ maxWidth: 300 }}>
            <UserCard user={user} />
          </Container>
        ))}
      </Slider>
      <CarouselControlsArrowsBasic2
        onNext={handleNext}
        onPrevious={handlePrevious}
        sx={{ transform: 'translateX(0px)', width: '100%' }}
      />
    </Box>
  );
}
