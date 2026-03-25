import { useMemo, useCallback } from 'react'
import Button from '../Button/Button'
import { Context } from '../../context/pagination'
import usePagination from '../../context/pagination'

const Pagination = ({ currentPage, totalPages, onPageChange, children, className }) => {
    const handleNext = useCallback(() => {
        onPageChange(currentPage + 1)
    }, [currentPage, onPageChange])

    const handlePrevious = useCallback(() => {
        onPageChange(currentPage - 1)
    }, [currentPage, onPageChange])

    const value = useMemo(
        () => ({
            currentPage,
            totalPages,
            onPageChange,
            handlePrevious,
            handleNext,
        }),
        [currentPage, totalPages, onPageChange, handlePrevious, handleNext],
    )

    return (
        <Context.Provider value={value}>
            <nav
                className={`w-full flex justify-between ${className}`}
                aria-label="Card navigation"
            >
                {children}
            </nav>
        </Context.Provider>
    )
}

const PaginationPrevButton = ({ children, className, ...props }) => {
    const { handlePrevious, currentPage } = usePagination()

    const isDisabled = currentPage === 1

    return (
        <Button
            onClick={handlePrevious}
            disabled={isDisabled}
            className={className}
            aria-label="Previous card"
            {...props}
        >
            {children || 'Previous'}
        </Button>
    )
}

const PaginationNextButton = ({ children, className, ...props }) => {
    const { handleNext, currentPage, totalPages } = usePagination()

    const isDisabled = currentPage === totalPages

    return (
        <Button
            onClick={handleNext}
            disabled={isDisabled}
            className={className}
            aria-label="Next card"
            {...props}
        >
            {children || 'Next'}
        </Button>
    )
}

const PaginationInfo = ({ children, className, ...props }) => {
    const { currentPage, totalPages } = usePagination()

    return (
        <span aria-live="polite" aria-atomic="true" className={className} {...props}>
            {children || `${currentPage} / ${totalPages}`}
        </span>
    )
}

Pagination.PrevButton = PaginationPrevButton
Pagination.NextButton = PaginationNextButton
Pagination.Info = PaginationInfo

export default Pagination
