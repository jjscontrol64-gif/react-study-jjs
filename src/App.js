import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/pages/HomePage';
import UseStatePage from './components/pages/UseStatePage';

export default function App() {
    const [page, setPage] = useState("home");

    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/useState" element={<UseStatePage />} />
            </Routes>
        </BrowserRouter>
    )
}
