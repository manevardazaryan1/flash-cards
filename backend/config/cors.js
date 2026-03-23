export const getCorsOptions = (allowedOrigins, allowedMethods) => {
    return {
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS!'))
            }
        },
        methods: allowedMethods,
        optionsSuccessStatus: 200,
    }
}
