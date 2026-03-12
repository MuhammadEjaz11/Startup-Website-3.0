import { useState, useCallback, useRef } from 'react';
import { Box, Typography, Grid2, Stack, Button, Card } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import GarmentSelector from '../../Components/MockupBuilder/GarmentSelector';
import GarmentPreview from '../../Components/MockupBuilder/GarmentPreview';
import LogoInput from '../../Components/MockupBuilder/LogoInput';
import PlacementControls from '../../Components/MockupBuilder/PlacementControls';
import ColorSwatches from '../../Components/MockupBuilder/ColorSwatches';
import {
  GARMENTS,
  TSHIRT_COLORS,
  BOX_COLORS,
  getPresetPosition,
  getDefaultPlacement,
  getDefaultGarmentColor,
  getLogoScaleDefault,
  THEME_ACCENT,
  THEME_DARK,
} from '../../Components/MockupBuilder/constants';
import TruckerHat from '../../Components/ObjectSvg/TruckerHat';
import Beanie from '../../Components/ObjectSvg/Beanie';
import UniformShirt from '../../Components/ObjectSvg/UniformShirt';

export default function MockupBuilder() {
  const { setYellowText, setBlackText } = useOutletContext() ?? {};
  const [garmentType, setGarmentType] = useState(GARMENTS[0].id);
  const [garmentColor, setGarmentColor] = useState(() => getDefaultGarmentColor(GARMENTS[0].id));
  const [boxColor, setBoxColor] = useState(BOX_COLORS[0]);
  const [logoSrc, setLogoSrc] = useState(null);
  const [logoPosition, setLogoPosition] = useState(() => {
    const defaultMode = getDefaultPlacement(GARMENTS[0].id);
    return getPresetPosition(GARMENTS[0].id, defaultMode) ?? { x: 50, y: 40 };
  });
  const [logoScale, setLogoScale] = useState(() => getLogoScaleDefault(GARMENTS[0].id));
  const [placementMode, setPlacementMode] = useState(() =>
    getDefaultPlacement(GARMENTS[0].id)
  );
  const [isDragging, setIsDragging] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const previewRef = useRef(null);

  useEffect(() => {
    if (setYellowText && setBlackText) {
      setBlackText('Patch Mockup ');
      setYellowText('Builder');
    }
  }, [setYellowText, setBlackText]);

  const garment = GARMENTS.find((g) => g.id === garmentType);

  useEffect(() => {
    const defaultMode = getDefaultPlacement(garmentType);
    setPlacementMode(defaultMode);
    const pos = getPresetPosition(garmentType, defaultMode);
    if (pos) setLogoPosition(pos);
    setLogoScale(getLogoScaleDefault(garmentType));
    setGarmentColor(getDefaultGarmentColor(garmentType));
  }, [garmentType]);

  const handlePlacementPreset = useCallback((mode) => {
    setPlacementMode(mode);
    const preset = getPresetPosition(garmentType, mode);
    if (preset) setLogoPosition({ ...preset });
  }, [garmentType]);

  const handleLogoPositionChange = useCallback((pos) => {
    setLogoPosition(pos);
    setPlacementMode('manual');
  }, []);

  const handleDownload = useCallback(async () => {
    const getBlob = previewRef.current?.getCanvasBlob;
    if (!getBlob || isExporting) return;
    setIsExporting(true);
    try {
      const blob = await getBlob(2);
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'patch-mockup.png';
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setIsExporting(false);
    }
  }, [isExporting]);

  return (
    <Box sx={{ py: { xs: 3, md: 5 } }}>


      <Typography
        sx={{
          fontFamily: 'satoshi',
          fontSize: { xs: 28, md: 36 },
          fontWeight: 700,
          color: THEME_DARK,
          mb: 2,
        }}
      >
        Patch Mockup Builder
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Inter',
          fontSize: { xs: 14, md: 16 },
          color: '#939393',
          mb: { xs: 3, md: 5 },
        }}
      >
        Upload or select a logo, choose a garment, customize colors, and download your mockup.
      </Typography>

      <Grid2
        container
        spacing={{ xs: 3, md: 4 }}
        sx={{
          flexDirection: { xs: 'column-reverse', lg: 'row' },
          alignItems: { lg: 'flex-start' },
        }}
      >
        <Grid2
          size={{ xs: 12, lg: 7 }}
          sx={{
            position: { lg: 'sticky' },
            top: { lg: 24 },
            alignSelf: { lg: 'flex-start' },
          }}
        >
          <GarmentPreview
            ref={previewRef}
            garmentType={garmentType}
            garmentColor={garmentColor}
            boxColor={boxColor}
            logoSrc={logoSrc}
            logoPosition={logoPosition}
            logoScale={logoScale}
            placementMode={placementMode}
            isDragging={isDragging}
            onLogoPositionChange={handleLogoPositionChange}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 5 }}>
          <Card
            elevation={0}
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 24px -4px rgba(30, 30, 30, 0.08), 0 8px 48px -8px rgba(30, 30, 30, 0.06)',
              border: '1px solid rgba(30, 30, 30, 0.06)',
            }}
          >
            <Stack spacing={3}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    fontFamily: 'satoshi',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    color: THEME_ACCENT,
                    display: 'block',
                    mb: 1,
                  }}
                >
                  Customize
                </Typography>
                <GarmentSelector
                  value={garmentType}
                  onChange={setGarmentType}
                  garments={GARMENTS}
                />
              </Box>
              <Box sx={{ borderTop: '1px solid rgba(30, 30, 30, 0.08)', pt: 3 }}>
                <LogoInput
                  logoSrc={logoSrc}
                  onLogoSrcChange={setLogoSrc}
                  onLogoScaleChange={setLogoScale}
                  logoScale={logoScale}
                />
              </Box>
              <Box sx={{ borderTop: '1px solid rgba(30, 30, 30, 0.08)', pt: 3 }}>
                <PlacementControls
                  garmentType={garmentType}
                  placementMode={placementMode}
                  onPlacementChange={handlePlacementPreset}
                />
              </Box>
              <Box sx={{ borderTop: '1px solid rgba(30, 30, 30, 0.08)', pt: 3 }}>
                <ColorSwatches
                  label="T-Shirt Color"
                  value={garmentColor}
                  onChange={setGarmentColor}
                  colors={TSHIRT_COLORS}
                />
              </Box>
              <Box sx={{ borderTop: '1px solid rgba(30, 30, 30, 0.08)', pt: 3 }}>
                <ColorSwatches
                  label="Box Color"
                  value={boxColor}
                  onChange={setBoxColor}
                  colors={BOX_COLORS}
                />
              </Box>
              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                disabled={isExporting}
                sx={{
                  backgroundColor: THEME_DARK,
                  color: '#fff',
                  borderRadius: '8px',
                  py: 1.75,
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: 'satoshi',
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(30, 30, 30, 0.2)',
                  border: '2px solid transparent',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: THEME_DARK,
                    color: '#fff',
                    borderColor: THEME_ACCENT,
                    boxShadow: `0 6px 24px rgba(112, 208, 217, 0.25)`,
                  },
                  '&:disabled': {
                    backgroundColor: '#999',
                    borderColor: 'transparent',
                  },
                }}
              >
                {isExporting ? 'Exporting...' : 'Download Mockup'}
              </Button>
            </Stack>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}
