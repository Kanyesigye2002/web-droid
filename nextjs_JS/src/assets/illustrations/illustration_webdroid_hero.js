import { memo } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
// hooks
import { useHoverParallax } from '../../hooks';
// components
import { SvgIconStyle, Image } from '../../components';
// pattern
import { Icon, Label, Character, Pattern01, Pattern02 } from '../pattern';

// ----------------------------------------------------------------------
const varUp = {
  animate: { y: [-8, 8, -8], x: [-4, 4, -4] },
  transition: { duration: 8, repeat: Infinity },
};

const varDown = {
  animate: { y: [8, -8, 8], x: [4, -4, 4] },
  transition: { duration: 8, repeat: Infinity },
};

const varLeft = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

const varRight = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

const styleIconContent = {
  fontSize: 22,
  color: 'common.black',
  fontWeight: 'fontWeightBold',
};

const styleIcon = {
  width: 40,
  height: 40,
  color: 'common.black',
};

const RootStyle = styled(Box)(() => ({
  width: 564,
  height: 564,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}));

// ----------------------------------------------------------------------

function WebdroidHeroIllustration({ ...other }) {
  const theme = useTheme();

  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

  const BLUE = theme.palette.info.main;
  const GREEN = theme.palette.success.main;
  const YELLOW = theme.palette.warning.main;
  const PURPLE = '#9B3AB1';

  return (
    <RootStyle
      component={m.div}
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
      {...other}
    >
      <>
        <Character front sx={{ position: 'absolute', bottom: 16, zIndex: 10, width: 300 }} />
        {/* Accounting */}
        <Box
          sx={{
            top: 170,
            zIndex: 9,
            position: 'absolute',
            transform: 'translateX(-125px) rotate(-15deg)',
          }}
        >
          <m.div style={{ y: offsetY(-50) }}>
            <Label
              text="React"
              icon={
                <Image
                  alt="React"
                  src="https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_react.svg"
                  sx={{ width: 48, height: 48 }}
                />
              }
              sx={{
                py: 1.75,
                typography: 'h5',
                color: '#61dafb',
                boxShadow: `0px 24px 48px rgba(0, 0, 0, 0.24), inset 0px -4px 10px ${alpha(
                  theme.palette.grey[600],
                  0.48
                )}`,
              }}
            />
          </m.div>
        </Box>
        <Character sx={{ position: 'absolute', bottom: 16, zIndex: 8, width: 300 }} />
      </>

      {/* Python */}
      <Box sx={{ position: 'absolute', transform: 'translate(170px, -110px) rotate(15deg)' }}>
        <m.div style={{ y: offsetY(80) }}>
          <Label
            text="software"
            icon={
              <Image
                alt="software development"
                src="https://zone-assets-api.vercel.app/assets/icons/ic_software_development.svg"
                sx={{ width: 56, height: 56 }}
              />
            }
            sx={{
              py: 1.75,
              typography: 'h4',
              boxShadow: `0px 24px 48px rgba(0, 0, 0, 0.24), inset 0px -4px 10px ${alpha(
                theme.palette.grey[600],
                0.48
              )}`,
            }}
          />
        </m.div>
      </Box>

      {/* Dw */}
      <Box{...varLeft} component={m.div} sx={{ zIndex: 10, bottom: 30, position: 'absolute' }}>
        <Icon
          color={GREEN}
          content={<Typography sx={{ ...styleIconContent }}>Dw</Typography>}
          sx={{ transform: 'translateX(40px) scale(1.2) rotate(-15deg)' }}
        />
      </Box>

      {/* Ae */}
      <Box {...varUp} component={m.div} sx={{ zIndex: 10, right: 90, position: 'absolute' }}>
        <Icon
          color={YELLOW}
          content={<Typography sx={{ ...styleIconContent, color: 'common.white' }}>Js</Typography>}
          sx={{ transform: 'scale(1.2) translateY(40px) rotate(15deg)' }}
        />
      </Box>

      {/* Ps */}
      <Box {...varDown} component={m.div} sx={{ zIndex: 10, position: 'absolute' }}>
        <Icon
          color={BLUE}
          content={<Typography sx={{ ...styleIconContent, color: 'common.white' }}>Ts</Typography>}
          sx={{ transform: 'scale(1.2) translate(-120px, 60px) rotate(15deg)' }}
        />
      </Box>

      <Pattern01 />
      <Pattern02 />
    </RootStyle>
  );
}

export default memo(WebdroidHeroIllustration);
