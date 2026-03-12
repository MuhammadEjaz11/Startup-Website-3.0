import { forwardRef, useImperativeHandle, useCallback, useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { GARMENT_IDS, getBaseLogoPercent, getPlacementBorderWidth } from './constants';
import { PRODUCT_SVG_MAP } from './productSvgMap';

const PREVIEW_WIDTH = 400;
const PREVIEW_HEIGHT = 480;
const BODY_PATH =
  'm177.5 701.59 32.621 36.518h4.5115l8.3288-8.749v109.55l1.3881 3.8039 125.97-0.38041 3.8174-2.6628-1.0411-109.17 9.3699 9.1294 3.8174-0.76078 31.927-35.757v-5.3255l-41.991-45.647-43.726-19.78s-15.964 18.639-47.544 0.76079l-41.644 15.976-45.809 52.494z';

function createTshirtSvgDataUrl(color) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220.71 210.36"><g transform="translate(-177.5 -632.36)"><path d="${BODY_PATH}" fill="${color}"/></g></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function clampPosition(pos, logoSizePercent) {
  const half = logoSizePercent / 2;
  return {
    x: Math.max(half, Math.min(100 - half, pos.x)),
    y: Math.max(half, Math.min(100 - half, pos.y)),
  };
}

const GarmentPreview = forwardRef(function GarmentPreview(
  {
    garmentType,
    garmentColor,
    boxColor = '#f0f0f0',
    logoSrc,
    logoPosition,
    logoScale,
    placementMode,
    isDragging,
    onLogoPositionChange,
    onDragStart,
    onDragEnd,
  },
  ref
) {
  const ProductSvg = PRODUCT_SVG_MAP[garmentType] ?? PRODUCT_SVG_MAP[GARMENT_IDS.TSHIRT];
  const baseLogoPercent = getBaseLogoPercent(garmentType);
  const placementBorderWidth = getPlacementBorderWidth(garmentType);
  const productRef = useRef(null);
  const [productRect, setProductRect] = useState(null);
  const dragRef = useRef({ active: false, startX: 0, startY: 0, startPos: { x: 0, y: 0 } });

  useEffect(() => {
    const el = productRef.current;
    if (!el) return;
    const updateRect = () => setProductRect(el.getBoundingClientRect());
    updateRect();
    const ro = new ResizeObserver(updateRect);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const logoSizePercent = baseLogoPercent * logoScale;
  const clampedPos = logoPosition
    ? clampPosition(logoPosition, logoSizePercent)
    : { x: 50, y: 50 };

  const handlePointerDown = useCallback(
    (e) => {
      if (placementMode !== 'manual' || !logoSrc || !onLogoPositionChange) return;
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      dragRef.current = {
        active: true,
        startX: e.clientX,
        startY: e.clientY,
        startPos: { ...clampedPos },
      };
      onDragStart?.();
    },
    [placementMode, logoSrc, clampedPos.x, clampedPos.y, onLogoPositionChange, onDragStart]
  );

  const handlePointerMove = useCallback(
    (e) => {
      const { active, startX, startY, startPos } = dragRef.current;
      if (!active || !productRect) return;
      const deltaPercentX = ((e.clientX - startX) / productRect.width) * 100;
      const deltaPercentY = ((e.clientY - startY) / productRect.height) * 100;
      const newPos = clampPosition(
        { x: startPos.x + deltaPercentX, y: startPos.y + deltaPercentY },
        logoSizePercent
      );
      onLogoPositionChange?.(newPos);
    },
    [productRect, logoSizePercent, onLogoPositionChange]
  );

  const handlePointerUp = useCallback(() => {
    dragRef.current = { active: false, startX: 0, startY: 0, startPos: { x: 0, y: 0 } };
    onDragEnd?.();
  }, [onDragEnd]);

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  const getCanvasBlob = useCallback(
    (scale = 2) => {
      const w = Math.floor(PREVIEW_WIDTH * scale);
      const h = Math.floor(PREVIEW_HEIGHT * scale);
      const offscreen = document.createElement('canvas');
      offscreen.width = w;
      offscreen.height = h;
      const ctx = offscreen.getContext('2d');
      ctx.fillStyle = boxColor;
      ctx.fillRect(0, 0, w, h);
      const tshirtImg = new Image();
      tshirtImg.src = createTshirtSvgDataUrl(garmentColor);
      return new Promise((resolve, reject) => {
        tshirtImg.onload = () => {
          const pad = Math.min(w, h) * 0.1;
          const maxSize = Math.min(w, h) - pad * 2;
          const imgRatio = 220.71 / 210.36;
          let drawW = maxSize;
          let drawH = maxSize / imgRatio;
          if (drawH > maxSize) {
            drawH = maxSize;
            drawW = maxSize * imgRatio;
          }
          const tshirtX = (w - drawW) / 2;
          const tshirtY = (h - drawH) / 2;
          ctx.drawImage(tshirtImg, tshirtX, tshirtY, drawW, drawH);
          if (logoSrc) {
            const logoImg = new Image();
            logoImg.onload = () => {
              const basePercent = getBaseLogoPercent(garmentType);
              const logoSizePx = Math.min(drawW, drawH) * (basePercent / 100) * logoScale;
              const logoX = tshirtX + (clampedPos.x / 100) * drawW - logoSizePx / 2;
              const logoY = tshirtY + (clampedPos.y / 100) * drawH - logoSizePx / 2;
              ctx.drawImage(logoImg, logoX, logoY, logoSizePx, logoSizePx);
              offscreen.toBlob(resolve, 'image/png');
            };
            logoImg.onerror = () => offscreen.toBlob(resolve, 'image/png');
            logoImg.src = logoSrc;
          } else {
            offscreen.toBlob(resolve, 'image/png');
          }
        };
        tshirtImg.onerror = reject;
      });
    },
    [garmentType, garmentColor, boxColor, logoSrc, clampedPos.x, clampedPos.y, logoScale]
  );

  useImperativeHandle(ref, () => ({ getCanvasBlob }));

  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: '5/6',
        maxHeight: 560,
        backgroundColor: boxColor,
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        ref={productRef}
        sx={{
          position: 'relative',
          width: garmentType === GARMENT_IDS.BAG ? '70%' : '80%',
          maxWidth: garmentType === GARMENT_IDS.BAG ? 420 : 480,
          flexShrink: 0,
          py: garmentType === GARMENT_IDS.BAG ? 3 : 0,
          boxSizing: 'content-box',
        }}
      >
        <ProductSvg
          color={garmentColor}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        {(logoSrc || placementMode !== 'manual') && (
          <Box
            onPointerDown={handlePointerDown}
            sx={{
              position: 'absolute',
              left: `${clampedPos.x}%`,
              top: `${clampedPos.y}%`,
              transform: 'translate(-50%, -50%)',
              width: `${logoSizePercent}%`,
              aspectRatio: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: placementMode === 'manual' ? (isDragging ? 'grabbing' : 'grab') : 'default',
              touchAction: 'none',
              pointerEvents: placementMode === 'manual' ? 'auto' : 'none',
              border:
                placementMode !== 'manual'
                  ? `${placementBorderWidth} dashed rgba(112, 208, 217, 0.8)`
                  : '2px solid transparent',
              borderRadius: '4px',
            }}
          >
            {logoSrc && (
              <img
                src={logoSrc}
                alt="Logo"
                draggable={false}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  pointerEvents: 'none',
                }}
              />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
});

export default GarmentPreview;
