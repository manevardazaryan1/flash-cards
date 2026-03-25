import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { fetchCards } from '../../redux/slices/cards'
import { clearMessages } from '../../redux/slices/cards'

const useCards = () => {
    const dispatch = useDispatch()
    const { cards, loading, error, count } = useSelector((state) => state.cards)

    const getCards = useCallback(() => {
        dispatch(fetchCards())
    }, [dispatch])

    const clearCardMessages = useCallback(() => {
        dispatch(clearMessages())
    }, [dispatch])

    return { cards, loading, error, count, getCards, clearCardMessages }
}

export default useCards
