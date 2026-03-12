import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { THEME_ACCENT } from './constants';

export default function GarmentSelector({ value, onChange, garments }) {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: 'satoshi',
          fontSize: 15,
          fontWeight: 600,
          color: '#1E1E1E',
          mb: 1.5,
        }}
      >
        Product
      </Typography>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={(_, v) => v && onChange(v)}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          '& .MuiToggleButtonGroup-grouped': {
            border: '1px solid rgba(30, 30, 30, 0.12)',
            borderRadius: '8px',
            textTransform: 'none',
            transition: 'all 0.2s ease',
            px: 1.5,
            py: 1.5,
            minWidth: 72,
            '&.Mui-selected': {
              backgroundColor: 'rgba(112, 208, 217, 0.12)',
              color: '#1E1E1E',
              borderColor: THEME_ACCENT,
              '&:hover': {
                backgroundColor: 'rgba(112, 208, 217, 0.18)',
                borderColor: THEME_ACCENT,
              },
            },
            '&:hover': {
              borderColor: THEME_ACCENT,
              backgroundColor: 'rgba(112, 208, 217, 0.06)',
            },
          },
        }}
      >
        {garments.map((g) => (
          <ToggleButton key={g.id} value={g.id}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0.75,
              }}
            >

              <Typography sx={{ fontSize: 12, fontWeight: 600 }}>{g.label}</Typography>
            </Box>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}
