import PropTypes from 'prop-types';
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Stack, Container, Typography, Button, Divider, Box, LinearProgress } from '@mui/material';
// utils
import { fPercent } from '../utils/formatNumber';
// components
import { Iconify } from '../components';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: 0,
}));

const SKILLS = [
  {
    label: 'Web Development',
    value: 96.8
  },
  {
    label: 'React JS',
    value: 95.4
  },
  {
    label: 'Java & Spring Boot',
    value: 85.7
  },
  {
    label: 'Kotlin',
    value: 89.7
  }
];

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number
  })
};

function ProgressItem({ progress }) {
  const { label, value } = progress;
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
        <Typography variant='subtitle2'>{label}&nbsp;-&nbsp;</Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant='determinate'
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' }
        }}
      />
    </Box>
  );
}

// ----------------------------------------------------------------------

export default function Results() {
  return (
    <RootStyle>
      <Container>
        <Grid
          container
          rowSpacing={{ xs: 5, md: 0 }}
          columnSpacing={{ md: 3 }}
          justifyContent="space-between"
        >
          <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Test Results
            </Typography>

            <Typography variant="h3" sx={{ mt: 2, mb: 4 }}>
              About the test Preview
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor
              auctor, justo. Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas.
            </Typography>

            <Button size="large" endIcon={<Iconify icon={directionStraightRight} />} sx={{ mt: 5 }}>
              Lean more
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 5, mt: 1 }}>
              {SKILLS.map((progress, index) => (
                  <ProgressItem progress={progress} key={index} />
              ))}
              <Typography varient='subtitle1' sx={{ textAlign: 'center', pt: 3 }} fullWidth>
                Average test score
              </Typography>
              <ProgressItem progress={{label: 'Avg Score', value: 96.8}} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
