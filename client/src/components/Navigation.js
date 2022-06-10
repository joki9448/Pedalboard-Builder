import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav  className="nav">
                <Link to="/pedalboard">
                    <img className="nav-img" alt="builder" src="/images/tobuilderimage.jpeg"/>
                </Link>
                <Link to="/builds">
                    <img className="nav-img" alt="collection" src="/images/toboardcollection.jpeg"/>
                </Link>
            </nav>
        </div>
    )
}

export default Navigation;