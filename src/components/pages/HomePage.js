import { Game } from '../Game';

export default function HomePage() {
    return (
        <div className="game">
            <h2>Tic Tac Toe</h2>
            <div className='game-board'>
                <Game />
            </div>
        </div>
    )
}