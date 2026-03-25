import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const Context = createContext()

const FlashCard = ({ children, className = '', ...props }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const toggleFlip = useCallback(() => {
        setIsFlipped((prev) => !prev)
    }, [])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggleFlip()
        }
    }

    const value = useMemo(() => ({ isFlipped, toggleFlip }), [isFlipped, toggleFlip])

    return (
        <Context.Provider value={value}>
            <div
                role="button"
                tabIndex="0"
                aria-pressed={isFlipped}
                onClick={() => setIsFlipped(!isFlipped)}
                onKeyDown={handleKeyDown}
                className={`relative w-64 h-80 cursor-pointer perspective-1000 ${className}`}
                {...props}
            >
                <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                        isFlipped ? 'rotate-y-180' : 'rotate-y-0'
                    }`}
                >
                    {children}
                </div>
            </div>
        </Context.Provider>
    )
}

const Front = ({ children, className = '', ...props }) => {
    const { isFlipped } = useContext(Context)

    return (
        <div
            aria-hidden={isFlipped}
            className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 rounded-2xl shadow-xl border-2 border-slate-100 ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

const Back = ({ children, className = '', ...props }) => {
    const { isFlipped } = useContext(Context)

    return (
        <div
            aria-hidden={!isFlipped}
            className={`absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 rounded-2xl shadow-xl bg-slate-800 ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

FlashCard.Front = Front
FlashCard.Back = Back

export default FlashCard
