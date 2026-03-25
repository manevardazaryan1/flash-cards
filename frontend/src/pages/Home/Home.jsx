import { Link } from 'react-router-dom'
import Cards from '../../features/Cards/Cards'
import Modal from '../../components/Modal/Modal'
import HomeContainer from './HomeContainer'
import { InformationCircleIcon as InfoOutline } from '@heroicons/react/24/outline'

const Home = () => {
    const { isOpen, openModal, closeModal } = HomeContainer()

    return (
        <section className="flex container flex-col items-center justify-center min-h-screen p-4 mx-auto">
            <Link to="/" aria-label="Home">
                <img src="/logo.png" alt="Flashy Cards" className="mx-auto my-4" />
            </Link>
            <h1 className="text-3xl font-bold mb-6 text-center text-white">
                Welcome to Flash Cards App
                <button
                    type="button"
                    title="View study tips"
                    onClick={openModal}
                    aria-label="View study tips"
                    className="ml-2 inline-flex items-center justify-center rounded-full transition-colors hover:text-white text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                    <InfoOutline
                        className="inline-block w-6 h-6 ml-2 cursor-pointer hover:text-white text-gray-200"
                        onClick={openModal}
                        aria-hidden="true"
                    />
                </button>
            </h1>
            <Cards />
            <Modal isOpen={isOpen} onClose={closeModal} labeledBy="study-tips-title">
                <Modal.Window>
                    <h2 id="study-tips-title">💡 How to Use</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>Flip the Card:</strong> Click any card to reveal the answer on
                            the back.
                        </li>
                        <li>
                            <strong>Study Mode:</strong> Use the navigation at the bottom to move
                            through your deck.
                        </li>
                        <li>
                            <strong>Active Recall:</strong> Try to say the answer out loud before
                            flipping! This "active recall" method is the fastest way to lock
                            information into your long-term memory.
                        </li>
                    </ul>
                    <p className="text-sm text-gray-600">Happy Studying! 🚀</p>
                </Modal.Window>
            </Modal>
        </section>
    )
}

export default Home
