export const THEME_ACCENT = '#70D0D9';
export const THEME_DARK = '#1E1E1E';

export const GARMENT_IDS = {
  TSHIRT: 'tshirt',
  HOODIE: 'hoodie',
  JACKET: 'jacket',
  BAG: 'bag',
  CAP: 'cap',
  BEANIE: 'beanie',
  TRUCKER_HAT: 'trucker-hat',
  UNIFORM_SHIRT: 'uniform-shirt',
};

export const GARMENTS = [
  { id: GARMENT_IDS.TSHIRT, label: 'T-Shirt', mockupPath: '/images/mockup-builder/garments/tshirt.png' },
  { id: GARMENT_IDS.HOODIE, label: 'Hoodie', mockupPath: '/images/mockup-builder/garments/hoodie.png' },
  { id: GARMENT_IDS.JACKET, label: 'Jacket', mockupPath: '/images/mockup-builder/garments/jacket.png' },
  { id: GARMENT_IDS.BAG, label: 'Bag', mockupPath: '/images/mockup-builder/garments/bag.png' },
  { id: GARMENT_IDS.CAP, label: 'Cap', mockupPath: '/images/mockup-builder/garments/cap.png' },
  { id: GARMENT_IDS.BEANIE, label: 'Beanie', mockupPath: '/images/mockup-builder/garments/beanie.svg' },
  { id: GARMENT_IDS.TRUCKER_HAT, label: 'Trucker Hat', mockupPath: '/images/mockup-builder/garments/trucker-hat.svg' },
  { id: GARMENT_IDS.UNIFORM_SHIRT, label: 'Uniform Shirt', mockupPath: '/images/mockup-builder/garments/uniform-shirt.svg' },
];

const TSHIRT_PRESETS = {
  'left-chest': { x: 35, y: 32 },
  'right-chest': { x: 65, y: 32 },
  
  
};

const CAP_PRESETS = {
  front: { x: 50, y: 45 },
  back: { x: 50, y: 52 },
  left: { x: 35, y: 47 },
  right: { x: 65, y: 47 },
};

const BEANIE_PRESETS = {
  front: { x: 50, y: 76 },
};

const BAG_PRESETS = {
  center: { x: 50, y: 60 },
};

const UNIFORM_SHIRT_PRESETS = {
  'left-chest': { x: 37, y: 37 },
  'right-chest': { x: 63, y: 37 },
  bottom: { x: 50, y: 75 },
};

export const PRODUCT_CONFIG = {
  [GARMENT_IDS.TSHIRT]: {
    placements: ['left-chest', 'right-chest', 'center-chest', 'bottom', 'manual'],
    presetPositions: TSHIRT_PRESETS,
    defaultPlacement: 'center-chest',
  },
  [GARMENT_IDS.HOODIE]: {
    placements: ['left-chest', 'right-chest', 'center-chest', 'bottom', 'manual'],
    presetPositions: TSHIRT_PRESETS,
    defaultPlacement: 'center-chest',
  },
  [GARMENT_IDS.JACKET]: {
    placements: ['left-chest', 'right-chest',  'manual'],
    presetPositions: TSHIRT_PRESETS,
    defaultPlacement: 'right-chest',
  },
  [GARMENT_IDS.BAG]: {
    placements: ['center', 'manual'],
    presetPositions: BAG_PRESETS,
    defaultPlacement: 'center',
  },
  [GARMENT_IDS.CAP]: {
    placements: ['front', 'back', 'left', 'right', 'manual'],
    presetPositions: CAP_PRESETS,
    defaultPlacement: 'front',
  },
  [GARMENT_IDS.BEANIE]: {
    placements: ['front', 'manual'],
    presetPositions: BEANIE_PRESETS,
    defaultPlacement: 'front',
  },
  [GARMENT_IDS.TRUCKER_HAT]: {
    placements: ['front', 'back', 'left', 'right', 'manual'],
    presetPositions: { front: { x: 50, y: 45 }, back: { x: 50, y: 52 }, left: { x: 35, y: 47 }, right: { x: 65, y: 47 } },
    defaultPlacement: 'front',
  },
  [GARMENT_IDS.UNIFORM_SHIRT]: {
    placements: ['left-chest', 'right-chest', 'bottom', 'manual'],
    presetPositions: UNIFORM_SHIRT_PRESETS,
    defaultPlacement: 'left-chest',
  },
};

export function getPresetPosition(garmentId, mode) {
  if (mode === 'manual') return null;
  const config = PRODUCT_CONFIG[garmentId];
  const pos = config?.presetPositions?.[mode];
  return pos ? { ...pos } : { x: 50, y: 40 };
}

export function getPlacementModes(garmentId) {
  return PRODUCT_CONFIG[garmentId]?.placements ?? ['left-chest', 'right-chest', 'center-chest', 'bottom', 'manual'];
}

export function getDefaultPlacement(garmentId) {
  return PRODUCT_CONFIG[garmentId]?.defaultPlacement ?? 'center-chest';
}

export const PLACEMENT_MODES = ['left-chest', 'right-chest', 'center-chest', 'bottom', 'manual'];

export const GARMENT_COLORS = [
  '#000000',
  '#FFFFFF',
  '#1E3A5F',
  '#8B0000',
  '#2F4F4F',
  '#708090',
  '#228B22',
  '#4169E1',
  '#FF4500',
  '#9370DB',
  '#70D0D9',
  '#FFD700',
];

export const TSHIRT_COLORS = [
  '#000000',
  '#FFFFFF',
  '#1E3A5F',
  '#8B0000',
  '#2E4A2E',
  '#708090',
  '#228B22',
  '#4169E1',
  '#FF4500',
  '#9370DB',
  '#70D0D9',
  '#FFD700',
  '#C41E3A',
  '#4B0082',
  '#2F4F4F',
  '#DAA520',
  '#20B2AA',
  '#CD853F',
  '#E6E6FA',
  '#FF6B6B',
];

export const BOX_COLORS = [
  '#f0f0f0',
  '#ffffff',
  '#e8e8e8',
  '#2a2a2a',
  '#1a1a1a',
  '#3d5a80',
  '#293241',
  '#ee6c4d',
  '#98c1d9',
  '#e0fbfc',
  '#f8f9fa',
  '#dee2e6',
  '#adb5bd',
  '#495057',
  '#343a40',
];

export const PREDEFINED_LOGOS = [
  '/images/our-portfolio/embroidery/one.jpg',
  '/images/our-portfolio/embroidery/two.jpg',
  '/images/our-portfolio/embroidery/three.jpg',
  '/images/our-portfolio/embroidery/four.jpg',
  '/images/our-portfolio/embroidery/five.jpg',
  '/images/our-portfolio/embroidery/six.jpg',
  '/images/our-portfolio/embroidery/seven.jpg',
  '/images/our-portfolio/embroidery/eight.jpg',
  '/images/our-portfolio/embroidery/nine.jpg',
  '/images/our-portfolio/embroidery/ten.jpg',
  '/images/our-portfolio/embroidery/eleven.jpg',
  '/images/our-portfolio/embroidery/twelve.jpg',
];

export const LOGO_SCALE_MIN = 0.3;
export const LOGO_SCALE_MAX = 1.5;
export const LOGO_SCALE_DEFAULT = 0.85;

const GARMENT_DEFAULT_COLORS = {
  [GARMENT_IDS.UNIFORM_SHIRT]: '#FFFFFF',
};

export function getDefaultGarmentColor(garmentId) {
  return GARMENT_DEFAULT_COLORS[garmentId] ?? TSHIRT_COLORS[0];
}

export const GARMENT_LOGO_OVERRIDES = {
  [GARMENT_IDS.UNIFORM_SHIRT]: {
    logoScaleDefault: 0.6,
    baseLogoPercent: 11,
    placementBorderWidth: '1px',
  },
};

export function getLogoScaleDefault(garmentId) {
  return GARMENT_LOGO_OVERRIDES[garmentId]?.logoScaleDefault ?? LOGO_SCALE_DEFAULT;
}

export function getBaseLogoPercent(garmentId) {
  return GARMENT_LOGO_OVERRIDES[garmentId]?.baseLogoPercent ?? 18;
}

export function getPlacementBorderWidth(garmentId) {
  return GARMENT_LOGO_OVERRIDES[garmentId]?.placementBorderWidth ?? '2px';
}
