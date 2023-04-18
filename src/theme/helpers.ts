const BASE_FONT_SIZE = 16; // Default base font size in pixels

export function toRem(px: number) {
    const rem = px / BASE_FONT_SIZE;
    return `${rem}rem`;
}
