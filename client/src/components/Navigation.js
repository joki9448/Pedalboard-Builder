import { Link } from 'react-router-dom';

function Navigation() {
    
    return (
        <div className="home-container">
            <h1>Pedalboard Builder</h1>
            {/* <div className="whitescreen"></div> */}
            <p className="nav-text-2">
                Your Collection
            </p>
            <p className="nav-text-1">
                Build Your Board
            </p>
            <nav className="nav">
                    <Link to="/builder">
                        <div className="nav-img-container-1">
                            <img className="nav-img-1" alt="builder" src="/images/tobuilderimage.jpeg"/>
                        </div>
                    </Link>
                    <Link to="/collection">
                        <div className="nav-img-container-2">
                            <img className="nav-img-2" alt="collection" src="/images/toboardcollection.jpeg"/>
                        </div>
                    </Link>
            </nav>
            <div className="background-color"></div>
            <div className="background-layer"></div>
        </div>
    )
}

export default Navigation;