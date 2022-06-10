import { Link } from 'react-router-dom';

function Builder() {
    return (
        <div>
            <Link to="/">
                <button>HOME</button>
            </Link>
            <h1>Hello World</h1>
        </div>
    )
}

export default Builder;