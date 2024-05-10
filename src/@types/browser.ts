import { Language } from "./language";

export type Browser = {
    device: 'Desktop' | 'Mobile';
    height: number;
    language: Language;
    mouse: {
        x: number;
        y: number;
        cursor?: 'Left' | 'Right';
    };
    scroll: number;
    type: 'Chrome' | 'Firefox' | 'Microsoft' | 'Opera' | 'Safari' | 'Unknown';
    width: number;
};
