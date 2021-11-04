import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Grid, Avatar, Tooltip, Divider, Typography, IconButton, Container } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
//
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: 'Facebook',
    icon: <Icon icon={facebookFill} width={20} height={20} color='#1877F2' />
  },
  {
    name: 'Instagram',
    icon: <Icon icon={instagramFilled} width={20} height={20} color='#D7336D' />
  },
  {
    name: 'Linkedin',
    icon: <Icon icon={linkedinFill} width={20} height={20} color='#006097' />
  },
  {
    name: 'Twitter',
    icon: <Icon icon={twitterFill} width={20} height={20} color='#1C9CEA' />
  }
];

const CardMediaStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  paddingTop: 40
  // '&:before': {
  //   top: 0,
  //   zIndex: 9,
  //   content: '\'\'',
  //   width: '100%',
  //   height: '100%',
  //   position: 'absolute'
  // }
}));

// ----------------------------------------------------------------------

function InfoItem(phoneNumber) {
  return (
    <Typography variant='body2' align='center' sx={{ mb: 0.5, color: 'text.secondary' }}>
      Tel: {phoneNumber}
    </Typography>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default function UserCard({ user, ...other }) {
  const { name, role, phoneNumber, avatar } = user;
  return (<>
    <Card {...other}>
      <CardMediaStyle>
        <SvgIconStyle
          color='paper'
          src='/static/icons/shape-avatar.svg'
          sx={{
            width: '100%',
            height: 62,
            zIndex: 10,
            bottom: -26,
            position: 'absolute'
          }}
        />
        <Avatar
          alt={name}
          src={avatar}
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            position: 'absolute',
            transform: 'translateY(-50%)'
          }}
        />
      </CardMediaStyle>
      <Typography variant='subtitle1' align='center' sx={{ mt: 6 }}>
        {name}
      </Typography>
      <Typography variant='body2' align='center' sx={{ color: 'text.secondary' }}>
        {role}
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 1, mb: 1 }}>
        {SOCIALS.map((social) => (
          <Tooltip key={social.name} title={social.name}>
            <IconButton>{social.icon}</IconButton>
          </Tooltip>
        ))}
      </Box>
      <Divider />
      <Grid container sx={{ p: 1, textAlign: 'center' }}>
        {InfoItem(phoneNumber)}
      </Grid>
    </Card>
  </>);
}
