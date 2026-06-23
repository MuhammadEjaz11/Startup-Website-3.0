import Tshirt from '../ObjectSvg/Tshirt';
import Cap from '../ObjectSvg/Cap';
import Hoodie from '../ObjectSvg/Hoodie';
import Jacket from '../ObjectSvg/Jacket';
import Bag from '../ObjectSvg/Bag';
import Beanie from '../ObjectSvg/Beanie';
import TruckerHat from '../ObjectSvg/TruckerHat';
import UniformShirt from '../ObjectSvg/UniformShirt';
import { GARMENT_IDS } from './constants';

export const PRODUCT_SVG_MAP = {
  [GARMENT_IDS.TSHIRT]: Tshirt,
  [GARMENT_IDS.HOODIE]: Hoodie,
  [GARMENT_IDS.JACKET]: Jacket,
  [GARMENT_IDS.BAG]: Bag,
  [GARMENT_IDS.CAP]: Cap,
  [GARMENT_IDS.BEANIE]: Beanie,
  [GARMENT_IDS.TRUCKER_HAT]: TruckerHat,
  [GARMENT_IDS.UNIFORM_SHIRT]: UniformShirt,
};
