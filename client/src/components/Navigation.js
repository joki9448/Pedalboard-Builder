import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav  className="nav">
                <Link to="/builder">
                    <img className="nav-img" alt="builder" src="/images/tobuilderimage.jpeg" height="750"/>
                </Link>
                <Link to="/collection">
                    <img className="nav-img" alt="collection" src="/images/toboardcollection.jpeg" height="750" width="1000"/>
                </Link>
            </nav>
        </div>
    )
}

export default Navigation;