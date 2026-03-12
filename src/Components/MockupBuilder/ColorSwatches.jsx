import { Box, Typography } from '@mui/material';

export default function ColorSwatches({ value, onChange, colors, label = 'Color' }) {
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
        {label}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
        {colors.map((color) => (
          <Box
            key={color}
            onClick={() => onChange?.(color)}
            sx={{
              width: 34,
              height: 34,
              borderRadius: '8px',
              backgroundColor: color,
              border: value === color ? '3px solid #1E1E1E' : '2px solid #e8e8e8',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: value === color ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
              '&:hover': {
                transform: 'scale(1.08)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
