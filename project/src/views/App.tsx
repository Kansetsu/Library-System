import '../style/App.css'
import { Sidebar } from '../components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home'

export function App() {
    return (
        <>
            <Router>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}