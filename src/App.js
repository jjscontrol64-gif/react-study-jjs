import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/pages/HomePage';
import UseStatePage from './components/pages/UseStatePage';

export default function App() {
    const [page, setPage] = useState("home");

    return (
        <>
            <Navigation currentPage={page} onNavigate={setPage} />
            {page === "home" && <HomePage />}
            {page === "useState" && <UseStatePage />}
        </>
    )
}

/**
import { useState } from 'react';
import { Game } from './Game';
import { UseState } from './UseState';
import { UseEffect } from './UseEffect';

export default function App() {
    const [page, setPage] = useState("home");

    return (
        <>
            <div className='navigation'>
                <h1>React Tutorial</h1>
                <ul>
                    <li onClick={() => setPage("home")}>Home</li>
                    <li onClick={() => setPage("tutorial")}>Tutorial</li>
                    <li onClick={() => setPage("usestate")}>UseState</li>
                    <li onClick={() => setPage("useeffect")}>UseEffect</li>
                </ul>
            </div>
            {page === "home" && <div className='home'><h2>Home</h2></div>}
            {page === "tutorial" && 
                <div className="game">
                    <h2>Tic Tac Toe</h2>
                    <div className="game-board">
                        <Game />
                    </div>
                </div>            
            }  
            {page === "usestate" && 
                <div className='useState'>
                    <h2>useState</h2>
                    <UseState />
                </div>
            }
            {page === "useeffect" && 
                <div className='useEffect'>
                    <h2>useEffect</h2>
                    <UseEffect />
                </div>
            }
             
        </>
    );
}
 */