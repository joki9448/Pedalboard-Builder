import { Link } from 'react-router-dom';

function Collection() {
    return (
        <div>
            <Link to="/">
                <button>HOME</button>
            </Link>
            <h1>Your Boards</h1>
        </div>
    )
}

export default Collection;