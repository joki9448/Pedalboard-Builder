import { Link } from 'react-router-dom';
import { useState } from 'react';
import Menu from './Menu';

function Builder() {
    const [pedals, setPedals] = useState([])

    return (
        <div>
            <Link to="/">
                <button>HOME</button>
            </Link>
            <h1>Build Your Board</h1>
            <div className="menu-container">
                <Menu setPedals={setPedals}/>
            </div>
        </div>
    )
}

export default Builder;