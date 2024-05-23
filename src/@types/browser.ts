import { Language } from './language';

export type Browser = {
    cookies: 'Accept' | 'Decline' | 'Unknown';
    device: 'Desktop' | 'Mobile';
    height: number;
    language: Language;
    media: 'Extra Small' | 'Small' | 'Medium' | 'Large' | 'Extra Large' | 'Huge';
    mouse: {
        x: number;
        y: number;
        cursor?: 'Left' | 'Right';
    };
    scroll: number;
    type: 'Chrome' | 'Firefox' | 'Microsoft' | 'Opera' | 'Safari' | 'Unknown';
    width: number;
};
