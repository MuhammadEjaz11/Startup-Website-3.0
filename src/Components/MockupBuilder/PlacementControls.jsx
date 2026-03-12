import { Box, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import { getPlacementModes } from './constants';

const PLACEMENT_LABELS = {
  'left-chest': 'Left Chest',
  'right-chest': 'Right Chest',
  'center-chest': 'Center Chest',
  center: 'Center',
  bottom: 'Bottom',
  front: 'Front',
  back: 'Back',
  left: 'Left',
  right: 'Right',
  manual: 'Manual',
};

const PLACEMENT_ICONS = {
  'left-chest': FormatAlignLeftIcon,
  'right-chest': FormatAlignRightIcon,
  'center-chest': FormatAlignCenterIcon,
  center: VerticalAlignCenterIcon,
  bottom: VerticalAlignBottomIcon,
  front: FormatAlignCenterIcon,
  back: FormatAlignCenterIcon,
  left: FormatAlignLeftIcon,
  right: FormatAlignRightIcon,
  manual: OpenWithIcon,
};

export default function PlacementControls({ garmentType, placementMode, onPlacementChange }) {
  const modes = getPlacementModes(garmentType);
  const presetModes = modes.filter((m) => m !== 'manual');

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
        Position
      </Typography>
      <ToggleButtonGroup
        value={placementMode}
        exclusive
        onChange={(_, v) => v && onPlacementChange?.(v)}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          '& .MuiToggleButtonGroup-grouped': {
            border: '1px solid #e8e8e8',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: 13,
            '&.Mui-selected': {
              backgroundColor: '#70D0D9',
              color: '#1E1E1E',
              borderColor: '#70D0D9',
              '&:hover': { backgroundColor: '#5bbfc7' },
            },
            '&:hover': { borderColor: '#70D0D9', backgroundColor: 'rgba(112, 208, 217, 0.06)' },
          },
        }}
      >
        {presetModes.map((mode) => {
          const Icon = PLACEMENT_ICONS[mode];
          return (
            <ToggleButton key={mode} value={mode} size="small">
              {Icon && <Icon sx={{ mr: 0.5, fontSize: 18 }} />}
              {PLACEMENT_LABELS[mode]}
            </ToggleButton>
          );
        })}
        <ToggleButton value="manual" size="small">
          <OpenWithIcon sx={{ mr: 0.5, fontSize: 18 }} />
          Manual
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
