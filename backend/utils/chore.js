export const logger = {
    info: (message) => {
        console.log(`[INFO] ${new Date().toISOString} - ${message}`)
    },
}

export const shuffle = (data) => {
    const shuffled = [...data]

    const { length } = shuffled

    for (let i = length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    return shuffled
}
