import { type SUPPORTED_LANGUAGES, AUTO_LANGUAGE } from '../constants/constants';

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage