import { Link } from 'react-router-dom';
import Pedals from './Pedals';

function Builder() {

    return (
        <div>
            <Link to="/">
                <button>HOME</button>
            </Link>
            <h1>Build Your Board</h1>
            <div className="menu-container">

            </div>
        </div>
    )
}

export default Builder;