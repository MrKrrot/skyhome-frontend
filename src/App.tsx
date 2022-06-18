import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Main, Register } from './pages/'
import { UserProvider } from './context/UserContext'

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Main />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </Router>
        </UserProvider>
    )
}

export default App
