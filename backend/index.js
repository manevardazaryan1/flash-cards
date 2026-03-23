import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { ALLOWED_ORIGINS, ALLOWED_METHODS } from './constants/app.js'
import { getCorsOptions } from './config/cors.js'
import { errorHandler } from './middleware/error.js'
import { logger } from './utils/chore.js'
import cardsRoutes from './routes/cards.js'

const app = express()

app.use(cors(getCorsOptions(ALLOWED_ORIGINS, ALLOWED_METHODS)))
app.use(express.json())
app.use('/api/v1/cards', cardsRoutes)
app.use(errorHandler)

const port = process.env.PORT || 3000

app.listen(port, () => {
    logger.info(`Server is running on port ${port}!`)
})
