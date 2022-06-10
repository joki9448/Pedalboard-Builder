import { Link } from 'react-router-dom';
import Pedals from './Pedals';
import Menu from './Menu';

function Builder({ pedals, setPedals }) {

    return (
        <div>
            <Link to="/">
                <button>HOME</button>
            </Link>
            <h1>Build Your Board</h1>
            <div className="menu-container">
                <Menu pedals={pedals} setPedals={setPedals} />
            </div>
        </div>
    )
}

export default Builder;