export type Browser = {
    device: 'Desktop' | 'Mobile';
    height: number;
    mouse: {
        x: number;
        y: number;
        cursor?: 'Left' | 'Right';
    };
    scroll: number;
    type: 'Chrome' | 'Firefox' | 'Microsoft' | 'Opera' | 'Safari' | 'Unknown';
    width: number;
};
