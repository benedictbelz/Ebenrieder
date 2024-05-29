import { Language } from './language';

export type Browser = {
    cookies: 'Accept' | 'Decline' | 'Unknown';
    device: 'Desktop' | 'Mobile';
    direction: 'Up' | 'Down' | 'None';
    height: number;
    language: Language;
    media: 'Extra Small' | 'Small' | 'Medium' | 'Large' | 'Extra Large' | 'Huge';
    mouse: {
        x: number;
        y: number;
        cursor?: 'Left' | 'Right';
    };
    scroll: number;
    status: 'Welcome' | 'None';
    type: 'Chrome' | 'Firefox' | 'Microsoft' | 'Opera' | 'Safari' | 'Unknown';
    variables: {
        spacingHorizontal: number;
        spacingVerticalS: number;
        spacingVerticalM: number;
        spacingVerticalL: number;
        spacingBoxBorizontal: number;
        spacingBoxVertical: number;
        fontSizeText: number;
        fontSizeDetail: number;
        fontSizeH1: number;
        fontSizeH2: number;
        fontSizeH3: number;
        fontSizeH4: number;
        mediaXS: number;
        mediaS: number;
        mediaM: number;
        mediaL: number;
        mediaXL: number;
    };
    width: number;
};
