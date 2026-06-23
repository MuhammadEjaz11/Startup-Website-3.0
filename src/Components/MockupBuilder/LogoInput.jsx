import { useRef, useState } from 'react';
import { Box, Typography, Button, Slider } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import { PREDEFINED_LOGOS, LOGO_SCALE_MIN, LOGO_SCALE_MAX } from './constants';

const ACCEPTED_TYPES = 'image/png,image/jpeg,image/jpg';
const ACCEPTED_MIME_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
const MAX_FILE_SIZE_BYTES = 1024 * 1024;
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ?? '';
const UPLOAD_PRESET = 'mockup_builder';

export default function LogoInput({ logoSrc, onLogoSrcChange, onLogoScaleChange, logoScale }) {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !CLOUDINARY_CLOUD_NAME) {
      if (!CLOUDINARY_CLOUD_NAME) setError('Cloudinary not configured');
      e.target.value = '';
      return;
    }

    if (!ACCEPTED_MIME_TYPES.includes(file.type)) {
      setError('Only JPEG and PNG files are allowed');
      e.target.value = '';
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError('File size must be 1MB or less');
      e.target.value = '';
      return;
    }

    setError(null);
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);
    
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: 'POST', body: formData }
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error?.message ?? 'Upload failed');
      }

      onLogoSrcChange?.(data.secure_url);
    } catch (err) {
      setError(err.message ?? 'Upload failed');
    } finally {
      setLoading(false);
    }

    e.target.value = '';
  };

  const handleRemove = () => {
    setError(null);
    if (logoSrc?.startsWith('blob:')) {
      URL.revokeObjectURL(logoSrc);
    }
    onLogoSrcChange?.(null);
  };

  const handleSelectPreset = (src) => {
    setError(null);
    if (logoSrc?.startsWith('blob:')) {
      URL.revokeObjectURL(logoSrc);
    }
    onLogoSrcChange?.(src);
  };

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
        Logo
      </Typography>
      <Box sx={{ display: 'flex', gap: 1.5, mb: 2, flexWrap: 'wrap' }}>
        <input
          ref={fileInputRef}
          type="file"
          accept={ACCEPTED_TYPES}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          disabled={loading}
        />
        <Button
          variant="contained"
          size="medium"
          disableElevation
          startIcon={
            loading ? (
              <CircularProgress size={18} sx={{ color: 'inherit' }} />
            ) : (
              <CloudUploadIcon sx={{ fontSize: 20 }} />
            )
          }
          onClick={() => !loading && fileInputRef.current?.click()}
          disabled={loading}
          sx={{
            backgroundColor: '#1E1E1E',
            color: '#fff',
            borderRadius: '8px',
            px: 2.5,
            py: 1.25,
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'satoshi',
            textTransform: 'none',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: '#333',
              color: '#fff',
            },
            '&.Mui-disabled': { backgroundColor: '#ccc', color: '#fff' },
          }}
        >
          {loading ? 'Uploading...' : 'Upload Logo'}
        </Button>
        {logoSrc && (
          <Button
            variant="outlined"
            size="medium"
            startIcon={<DeleteIcon sx={{ fontSize: 18 }} />}
            onClick={handleRemove}
            sx={{
              borderColor: 'rgba(30, 30, 30, 0.2)',
              color: '#5c5c5c',
              borderRadius: '8px',
              px: 2.5,
              py: 1.25,
              fontSize: 14,
              fontWeight: 600,
              fontFamily: 'satoshi',
              textTransform: 'none',
              transition: 'all 0.2s ease',
              '&:hover': {
                borderColor: '#dc3545',
                color: '#dc3545',
                backgroundColor: 'rgba(220, 53, 69, 0.04)',
              },
            }}
          >
            Remove
          </Button>
        )}
      </Box>
      {error && (
        <Typography sx={{ fontSize: 13, color: '#e53935', mb: 2 }}>{error}</Typography>
      )}
      <Typography sx={{ fontSize: 13, color: '#939393', mb: 1, fontWeight: 500 }}>Presets</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1.5,
          mb: 2,
          maxHeight: 180,
          overflowY: 'auto',
        }}
      >
        {PREDEFINED_LOGOS.map((src) => (
          <Box
            key={src}
            onClick={() => handleSelectPreset(src)}
            sx={{
              aspectRatio: 1,
              minWidth: 64,
              p: 1,
              borderRadius: '8px',
              border: logoSrc === src ? '2px solid #70D0D9' : '1px solid #e8e8e8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fafafa',
              transition: 'all 0.2s ease',
              '&:hover': { borderColor: '#70D0D9', backgroundColor: '#fff' },
            }}
          >
            <img
              src={src}
              alt=""
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </Box>
        ))}
      </Box>
      {logoSrc && (
        <Box>
          <Typography sx={{ fontSize: 14, color: '#939393', mb: 0.5 }}>Logo size</Typography>
          <Slider
            value={logoScale}
            min={LOGO_SCALE_MIN}
            max={LOGO_SCALE_MAX}
            step={0.05}
            onChange={(_, v) => onLogoScaleChange?.(v)}
            sx={{ color: '#70D0D9' }}
          />
        </Box>
      )}
    </Box>
  );
}
