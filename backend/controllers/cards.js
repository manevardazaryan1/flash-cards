import { cards } from '../models/cards.js'
import { getRandomColorFromPalette } from '../helpers/colors.js'
import { PALETTE } from '../constants/app.js'
import { shuffle } from '../utils/chore.js'

export const getAll = (_, res) => {
    const colored = cards.map((card) => {
        return {
            ...card,
            color: getRandomColorFromPalette(PALETTE),
        }
    })

    const shuffled = shuffle(colored)

    return res.status(200).json({
        status: 'success',
        message: 'Cards retrieved successfully',
        data: shuffled,
        count: shuffled.length,
    })
}
