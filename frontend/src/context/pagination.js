import { createContext, useContext } from 'react'

export const Context = createContext()

const usePagination = () => {
    const context = useContext(Context)

    if (!context) {
        throw new Error('usePagination must be used within a PaginationProvider')
    }
    return context
}

export default usePagination
