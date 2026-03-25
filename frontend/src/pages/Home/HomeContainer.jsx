import { useState } from 'react'

const HomeContainer = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return {
        isOpen,
        openModal,
        closeModal,
    }
}

export default HomeContainer
