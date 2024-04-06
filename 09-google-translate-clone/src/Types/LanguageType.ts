import { type SUPPORTED_LAGUAGES, AUTO_LANGUAGE } from '../constants/constants';

export type Language = keyof typeof SUPPORTED_LAGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage