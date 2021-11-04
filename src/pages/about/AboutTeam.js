import PropTypes from 'prop-types';
import { useRef } from 'react';
import Slider from 'react-slick';

// material
import { useTheme } from '@mui/material/styles';
import { Box, Card, Container, Typography, IconButton } from '@mui/material';

import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';

import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown } from '../../components/animate';
import { CarouselControlsArrowsBasic2 } from '../../components/carousel';

// ----------------------------------------------------------------------

const MOCK_MEMBERS = [
  {
    id: 1,
    name: "Kanyesigye Allan",
    role: "Full Stack Developer",
    avatar: "/static/mock-images/avatars/avatar_1.jpg"
  },
  {
    id: 5,
    name: "Philly Banks",
    role: "Marketing Director",
    avatar: "/static/mock-images/avatars/avatar_5.jpg"
  },
  {
    id: 2,
    name: "Mulungi Jordan",
    role: "UX Designer",
    avatar: "/static/mock-images/avatars/avatar_2.jpg"
  },
  {
    id: 3,
    name: "Twikirize Enock",
    role: "Production Manager",
    avatar: "/static/mock-images/avatars/avatar_3.jpg"
  },
  {
    id: 4,
    name: "Teddy",
    role: "Marketing Team",
    avatar: "/static/mock-images/avatars/avatar_4.jpg"
  },
]

// ----------------------------------------------------------------------

MemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string
  })
};

function MemberCard({ member }) {
  const { name, role, avatar } = member;
  return (
    <Card key={name} sx={{ p: 1, mx: 1.5 }}>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        {role}
      </Typography>
      <Box component="img" src={avatar} sx={{ width: '100%', borderRadius: 1.5 }} />
      <Box sx={{ mt: 2, mb: 1 }}>
        {[facebookFill, instagramFilled, linkedinFill, twitterFill].map((social, index) => (
          <IconButton key={index}>
            <Icon icon={social} width={20} height={20} />
          </IconButton>
        ))}
      </Box>
    </Card>
  );
}

export default function AboutTeam() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '0 80px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 }
      },
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
    <Container maxWidth="lg" sx={{ pb: 10, textAlign: 'center' }}>
      <MotionInView variants={varFadeInDown}>
        <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
          Web Droid team
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          A Great team is the key
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography
          sx={{
            mb: 10,
            mx: 'auto',
            maxWidth: 630,
            color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
          }}
        >
          Web Droid is a place where people with ideas and a zeal to implement them, come together.
        </Typography>
      </MotionInView>

      <Box sx={{ position: 'relative' }}>
        <Slider ref={carouselRef} {...settings}>
          {MOCK_MEMBERS.map((member) => (
            <MotionInView key={member.id} variants={varFadeIn}>
              <MemberCard member={member} />
            </MotionInView>
          ))}
        </Slider>
        <CarouselControlsArrowsBasic2
          onNext={handleNext}
          onPrevious={handlePrevious}
          sx={{ transform: 'translateY(-64px)' }}
        />
      </Box>
    </Container>
  );
}
