export const getRandomColorFromPalette = (palette) => {
    const randomIndex = Math.floor(Math.random() * palette.length)
    return palette[randomIndex]
}
