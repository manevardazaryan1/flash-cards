import { useEffect, useState } from 'react'
import useCards from '../../hooks/cards/useCards'

export const CardsContainer = () => {
    const { cards, loading, error, count, getCards, clearCardMessages } = useCards()
    const [page, setPage] = useState(1)
    const currentCard = cards ? cards[page - 1] : null
    const progress = (page / count) * 100

    useEffect(() => {
        getCards()
    }, [getCards])

    useEffect(() => {
        if (error) {
            const timeoutId = setTimeout(() => {
                clearCardMessages()
            }, 5000)

            return () => clearTimeout(timeoutId)
        }
    }, [error, clearCardMessages])

    const handleClose = () => {
        clearCardMessages()
    }

    return {
        error,
        loading,
        cards,
        page,
        count,
        currentCard,
        progress,
        setPage,
        clearCardMessages,
        handleClose,
    }
}

export default CardsContainer
