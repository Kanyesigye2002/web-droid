import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Container, Box, Grid, Divider, Button } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
import { fShortenNumber } from '../../utils/formatNumber';
// utils
import {_brands} from '../../_mock';
// assets
import { WebdroidHeroIllustration } from '../../assets';
// components
import { Iconify, SvgIconStyle } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  ...cssStyles(theme).bgImage(),
  overflow: 'hidden',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(15),
  },
}));

const BarStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  '& .MuiAutocomplete-root': {
    '& .MuiFilledInput-root': {
      height: '48px !important',
      backgroundColor: 'transparent !important',
    },
  },
  '& .MuiAutocomplete-endAdornment': {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

// ----------------------------------------------------------------------

export default function Hero() {

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={6} lg={5}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h1" sx={{ color: 'common.white' }}>
                  Get The{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    Career
                  </Box>{' '}
                  You Deserve
                </Typography>
                <Typography sx={{ color: 'grey.500' }}>
                  Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
                  venenatis ante odio sit amet eros.
                </Typography>
              </Stack>

              <BrandsSection />
              <SummarySection />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <WebdroidHeroIllustration />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

const DividerStyle = <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />;

function BrandsSection() {
  return (
    <Stack
      flexWrap="wrap"
      direction={{ md: 'row' }}
      alignItems={{ md: 'center' }}
      sx={{ pt: { md: 1 } }}
    >
      {_brands.slice(0, 4).map((brand) => (
        <Box
          key={brand.id}
          sx={{
            lineHeight: 0,
            my: { xs: 1.5, md: 0.5 },
            mr: { md: 3 },
            width: { xs: 0.5, md: 'auto' },
            '&:last-of-type': {
              mr: 0,
            },
          }}
        >
          <SvgIconStyle
            src={brand.image}
            sx={{
              width: 94,
              height: 28,
              opacity: 0.8,
              color: 'grey.500',
            }}
          />
        </Box>
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

function SummarySection() {
  return (
    <Stack
      spacing={3}
      direction={{ xs: 'column', md: 'row' }}
      divider={DividerStyle}
      sx={{ pt: { md: 5 } }}
    >
      <Stack spacing={{ md: 3 }} direction="row" divider={DividerStyle}>
        {SummaryItem(2000000, 'Jobs')}
        {SummaryItem(500000, 'Successful Hiring')}
      </Stack>
      <Stack spacing={{ md: 3 }} direction="row" divider={DividerStyle}>
        {SummaryItem(250000, 'Partners')}
        {SummaryItem(156000, 'Employee')}
      </Stack>
    </Stack>
  );
}

function SummaryItem(total, label) {
  return (
    <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
      <Typography variant="h4">{fShortenNumber(total)}+</Typography>
      <Typography variant="body2" sx={{ opacity: 0.48 }}>
        {label}
      </Typography>
    </Stack>
  );
}
