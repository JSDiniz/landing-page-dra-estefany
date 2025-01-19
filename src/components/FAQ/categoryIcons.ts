import { FaSyringe, FaTooth, FaTeeth, FaCalendarAlt, FaFirstAid } from 'react-icons/fa';
import { FAQCategory } from './types';
import { IconType } from 'react-icons';

interface CategoryIcon {
  icon: IconType;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const categoryIcons: Record<FAQCategory, CategoryIcon> = {
  treatment: { icon: FaSyringe, right:"0"},
  dental: { icon: FaTooth, bottom:"0"},
  prosthetics: { icon: FaTeeth, left:"0"},
  consultation: { icon: FaCalendarAlt },
  aftercare: { icon: FaFirstAid},

};