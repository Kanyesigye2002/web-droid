import { useRef } from 'react';
import Slider from 'react-slick';

// material
import { useTheme } from '@mui/material/styles';
import { Box, Container, useMediaQuery } from '@mui/material';

import { varFadeIn } from '../../components/animate';
import { CarouselControlsArrowsBasic2 } from '../../components/carousel';
import UserCard from './UserCard';

// ----------------------------------------------------------------------

const users = [
  {
    'id': 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
    'avatarUrl': '/static/mock-images/avatars/avatar_1.jpg',
    'cover': '/static/mock-images/covers/cover_1.jpg',
    'name': 'Jayvion Simon',
    'phoneNumber': '0752331807',
    'position': 'UX Designer'
  },
  {
    'id': 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
    'avatarUrl': '/static/mock-images/avatars/avatar_2.jpg',
    'cover': '/static/mock-images/covers/cover_2.jpg',
    'name': 'Lucian Obrien',
    'phoneNumber': '0752331807',
    'position': 'Full Stack Designer'
  },
  {
    'id': 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
    'avatarUrl': '/static/mock-images/avatars/avatar_3.jpg',
    'cover': '/static/mock-images/covers/cover_3.jpg',
    'name': 'Deja Brady',
    'phoneNumber': '0752331807',
    'position': 'Backend Developer'
  },
  {
    'id': 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4',
    'avatarUrl': '/static/mock-images/avatars/avatar_4.jpg',
    'cover': '/static/mock-images/covers/cover_4.jpg',
    'name': 'Harrison Stein',
    'phoneNumber': '0752331807',
    'position': 'UX Designer'
  },
  {
    'id': 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5',
    'avatarUrl': '/static/mock-images/avatars/avatar_5.jpg',
    'cover': '/static/mock-images/covers/cover_5.jpg',
    'name': 'Reece Chung',
    'phoneNumber': '0752331807',
    'position': 'UX Designer'
  },
  {
    'id': 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
    'avatarUrl': '/static/mock-images/avatars/avatar_6.jpg',
    'cover': '/static/mock-images/covers/cover_6.jpg',
    'name': 'Lainey Davidson',
    'phoneNumber': '0752331807',
    'position': 'Project Manager'
  },
  {
    'id': 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
    'avatarUrl': '/static/mock-images/avatars/avatar_7.jpg',
    'cover': '/static/mock-images/covers/cover_7.jpg',
    'name': 'Cristopher Cardenas',
    'phoneNumber': '0752331807',
    'position': 'Leader'
  },
  {
    'id': 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
    'avatarUrl': '/static/mock-images/avatars/avatar_8.jpg',
    'cover': '/static/mock-images/covers/cover_8.jpg',
    'name': 'Melanie Noble',
    'phoneNumber': '0752331807',
    'position': 'Backend Developer'
  },
  {
    'id': 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9',
    'avatarUrl': '/static/mock-images/avatars/avatar_9.jpg',
    'cover': '/static/mock-images/covers/cover_9.jpg',
    'name': 'Chase Day',
    'phoneNumber': '0752331807',
    'position': 'Project Manager'
  },
  {
    'id': 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10',
    'avatarUrl': '/static/mock-images/avatars/avatar_10.jpg',
    'cover': '/static/mock-images/covers/cover_10.jpg',
    'name': 'Shawn Manning',
    'phoneNumber': '0752331807',
    'position': 'UI Designer'
  }
];

export default function AboutTeam() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    slidesToShow: 2,
    centerMode: true,
    arrows: false,
    centerPadding: '0 0px',
    rtl: Boolean(theme.direction === 'rtl'),
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
        {users.map((user) => (
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
