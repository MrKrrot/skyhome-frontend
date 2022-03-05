import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main, Register } from './pages/'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App
