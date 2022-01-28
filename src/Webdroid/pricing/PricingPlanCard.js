import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Card, Button, Typography, Box, Stack, Divider } from '@mui/material';
//
import Label from '../../components/Label';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3),
  [theme.breakpoints.up(414)]: {
    padding: theme.spacing(5)
  }
}));

// ----------------------------------------------------------------------

PricingPlanCard.propTypes = {
  index: PropTypes.number,
  card: PropTypes.object
};

export default function PricingPlanCard({ card, index }) {
  const { subscription, icon, price, caption, commons, options, labelAction, priceMo, priceTwo } = card;

  return (
    <RootStyle>
      {index === 1 && (
        <Label
          color='info'
          sx={{
            top: 16,
            right: 16,
            position: 'absolute'
          }}
        >
          POPULAR
        </Label>
      )}

      <Typography variant='overline' sx={{ color: 'text.secondary' }}>
        {subscription}
      </Typography>

      <Typography
        variant='caption'
        sx={{
          color: 'primary.main',
          textTransform: 'capitalize'
        }}
      >
        {caption}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
          <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>
            $
          </Typography>
        <Typography variant='h3' sx={{ mx: 1 }}>
          {price} - {priceTwo}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
          $
        </Typography>
        <Typography variant='h4' sx={{ mx: 1, color: 'text.secondary' }}>
          {priceMo === 0 ? 'Free' : priceMo}
        </Typography>
        <Typography
          gutterBottom
          component='span'
          variant='subtitle2'
          sx={{
            pt: 1.4,
            alignSelf: 'flex-end',
            color: 'text.secondary'
          }}
        >
          /mo
        </Typography>
      </Box>

      <Box sx={{ width: 80, height: 80, mt: 3 }}>{icon}</Box>

      <Stack component='ul' spacing={2} sx={{ my: 5, width: 1 }}>
        <Stack spacing={2.5}>
          {commons.map((option) => (
            <Stack key={option} spacing={1.5} direction="row" alignItems="center">
              <Iconify icon={'eva:checkmark-fill'} sx={{ width: 20, height: 20 }} />
              <Typography variant="body2">{option}</Typography>
            </Stack>
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />

          {options.map((option, optionIndex) => {
            const disabledLine =
              (index === 0 && optionIndex === 1) ||
              (index === 0 && optionIndex === 2) ||
              (index === 0 && optionIndex === 3) ||
              (index === 0 && optionIndex === 4) ||
              (index === 1 && optionIndex === 4);

            return (
              <Stack
                spacing={1.5}
                direction="row"
                alignItems="center"
                sx={{
                  ...(disabledLine && { color: 'text.disabled' })
                }}
                key={option}
              >
                <Iconify icon={'eva:checkmark-fill'} sx={{ width: 20, height: 20,
                  color: 'primary.main',
                  ...(disabledLine && { color: 'text.disabled' }) }} />
                <Typography variant="body2">{option}</Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>

      <Button
        // to={"/"}
        fullWidth
        size='large'
        variant='contained'
        // component={RouterLink}
      >
        {labelAction}
      </Button>
    </RootStyle>
  );
}
