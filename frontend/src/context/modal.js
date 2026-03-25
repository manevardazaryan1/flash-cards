import { createContext, useContext } from 'react'
export const Context = createContext()

export const useModal = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error('useModal must be used within a <Modal> provider')
    }
    return context
}
