
import { gate } from './gate';
import { parking } from './parking';

export type ThemeName = 'gate' | 'parking';

// Define ColorScheme type (replace with actual values if needed)
export type ColorScheme = 'light';

export const themes: Record<ThemeName, Record<ColorScheme, object>> = {
  gate: gate,
  parking: parking,
};
