import MapGL from 'react-map-gl';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import phoneFill from '@iconify/icons-eva/phone-fill';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
//
import { MapControlPopup, MapControlMarker, MapControlScale, MapControlNavigation } from '../../components/map';
import { mapConfig } from '../../config';
import { varFadeIn, MotionInView } from '../../components/animate';

// ----------------------------------------------------------------------

export const MOCK_ADDRESS = [
  {
    latlng: [0.31674, 32.57781],
    address: 'YWCA George St, Kampala',
    phoneNumber: '0752331807'
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right': {
    display: 'none'
  }
}));

// ----------------------------------------------------------------------

export default function ContactMap() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const [tooltip, setTooltip] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 0.31674,
    longitude: 32.57781,
    zoom: 10
  });

  return (
    <MotionInView variants={varFadeIn}>
      <RootStyle>
        <MapGL
          {...viewport}
          onViewportChange={setViewport}
          mapStyle={`mapbox://styles/mapbox/${isLight ? 'light' : 'dark'}-v10`}
          mapboxApiAccessToken={mapConfig}
          width="100%"
          height="100%"
        >
          <MapControlScale />
          <MapControlNavigation />

          {MOCK_ADDRESS.map((country) => (
            <MapControlMarker
              key={country.latlng}
              latitude={country.latlng[0]}
              longitude={country.latlng[1]}
              onClick={() => setTooltip(country)}
            />
          ))}

          {tooltip && (
            <MapControlPopup
              longitude={tooltip.latlng[1]}
              latitude={tooltip.latlng[0]}
              onClose={() => setTooltip(null)}
              sx={{
                '& .mapboxgl-popup-content': { bgcolor: 'common.white' },
                '&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip': { borderTopColor: '#FFF' },
                '&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip': { borderBottomColor: '#FFF' }
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                Address
              </Typography>
              <Typography component="p" variant="caption">
                {tooltip.address}
              </Typography>

              <Typography component="p" variant="caption" sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                <Box component={Icon} icon={phoneFill} sx={{ mr: 0.5, width: 14, height: 14 }} />
                {tooltip.phoneNumber}
              </Typography>
            </MapControlPopup>
          )}
        </MapGL>
      </RootStyle>
    </MotionInView>
  );
}
