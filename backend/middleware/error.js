export const errorHandler = (err, _req, res, _next) => {
    const { statusCode = 500, message = 'Internal server error!' } = err

    res.status(statusCode).json({
        status: 'error',
        message,
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    })
}
