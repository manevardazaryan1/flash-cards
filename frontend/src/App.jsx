import { useRegisterSW } from 'virtual:pwa-register/react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Home from './pages/Home/Home.jsx'
import store, { persistor } from './redux/store.js'
import mainBackground from './assets/images/background/main.webp'
import './App.css'

function App() {
    const {
        needRefresh: [needRefresh],
        updateServiceWorker,
    } = useRegisterSW()
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {needRefresh && (
                    <div
                        role="alert"
                        aria-live="assertive"
                        className="fixed bottom-4 right-4 bg-white p-4 shadow-2xl rounded-lg border-2 border-blue-500 z-50"
                    >
                        <p className="text-sm mb-2">
                            New content available, click on reload button to update.
                        </p>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={() => updateServiceWorker(true)}
                        >
                            Reload
                        </button>
                    </div>
                )}
                <main
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${mainBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Home />
                </main>
            </PersistGate>
        </Provider>
    )
}

export default App
