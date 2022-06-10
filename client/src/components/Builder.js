import { Link } from 'react-router-dom';
import { useState } from 'react';
import Pedals from './Pedals';
import Menu from './Menu';

function Builder() {
    const [brands, setBrands] = useState([])

    return (
        <div>
            <Link to="/">
                <button>HOME</button>
            </Link>
            <h1>Build Your Board</h1>
            <div className="menu-container">
                <Menu brands={brands} setBrands={setBrands}/>
            </div>
        </div>
    )
}

export default Builder;