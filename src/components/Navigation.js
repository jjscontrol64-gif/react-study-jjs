import { Link } from 'react-router-dom';

export default function Navigation() {   
    return (
        <div className='navigation'>
            <h1>React Tutorial</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/useState">UseState</Link></li>
            </ul>
        </div>
    );
}