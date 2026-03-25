import CardsContainer from './CardsContainer'
import Message from '../../components/Message/Message'
import TextLoader from '../../components/Loader/TextLoader'
import FlashCard from '../../components/FlashCard/FlashCard'
import Pagination from '../../components/Pagination/Pagination'
import Progress from '../../components/Progress/Progress'

const Cards = () => {
    const { error, loading, count, currentCard, page, progress, setPage, handleClose } =
        CardsContainer()

    if (loading) {
        return <TextLoader />
    }

    if (error) {
        return <Message type="error" text={error} isOpen={error} onClose={handleClose} />
    }

    return (
        <section
            aria-label="Flashcard Study Area"
            className="w-full max-w-md mx-auto bg-black rounded-lg shadow-md"
        >
            <Progress
                progress={progress}
                className={`rounded-tr-lg !rounded-b-none ${page === count ? '!rounded-tl-lg' : ''}`}
            />
            <div aria-live="polite">
                {currentCard && (
                    <FlashCard key={currentCard.id} className="w-full">
                        <FlashCard.Front
                            style={{ backgroundColor: currentCard.color }}
                            className="font-medium rounded-none !outline-none !border-none !ring-0"
                        >
                            {currentCard.question}
                        </FlashCard.Front>
                        <FlashCard.Back
                            style={{ backgroundColor: currentCard.color }}
                            className="font-medium rounded-none !outline-none !border-none !ring-0"
                        >
                            {currentCard.answer}
                        </FlashCard.Back>
                    </FlashCard>
                )}
            </div>
            <Pagination
                currentPage={page}
                totalPages={count}
                onPageChange={setPage}
                className="w-full flex justify-between"
            >
                <Pagination.PrevButton
                    variant="filled"
                    color="ghost"
                    size="sm"
                    shape="md"
                    className="rounded-bl-lg rounded-br-none rounded-t-none text-white hover:!bg-black"
                />
                <Pagination.Info className="mx-4 font-medium text-white" />
                <Pagination.NextButton
                    variant="filled"
                    color="ghost"
                    size="sm"
                    shape="md"
                    className="rounded-br-lg rounded-bl-none rounded-t-none text-white hover:!bg-black"
                />
            </Pagination>
        </section>
    )
}

export default Cards
