import { useMemo } from 'react'
import { Context } from '../../context/modal'
import { useModal } from '../../context/modal'

const Modal = ({ children, isOpen, onClose }) => {
    const value = useMemo(() => ({ isOpen, handleClose: onClose }), [isOpen, onClose])

    return <Context.Provider value={value}>{children}</Context.Provider>
}

const Window = ({ children, className, labeledBy, ...props }) => {
    const { isOpen, handleClose } = useModal()
    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur p-4"
            onClick={handleClose}
            role="presentation"
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={labeledBy}
                className={`bg-white rounded-lg p-4 max-w-lg w-full min-h-[200px] flex flex-col items-center justify-center ${className}`}
                onClick={(e) => e.stopPropagation()}
                {...props}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label="Close modal"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    )
}

Modal.Window = Window

export default Modal
