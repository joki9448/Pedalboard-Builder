import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ConfigContainer from './ConfigContainer';

function Collection() {

    const [config, setConfig] = useState([])

    const request = async () => {
        try {
            let req = await fetch('/configs')
            let res = await req.json()
            console.log('res: ', res[1].chain)
            let chain = res[1].chain
            setConfig(chain)
        }   catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        request()
    }, [])

    return (
        <div>
            <Link to="/">
                <button>HOME</button>
            </Link>
            <h1>Your Boards</h1>
            <div>
                {config.map((e) => {
                    return <ConfigContainer key={e.id} config={e}/>
                })}
            </div>
        </div>
    )
}

export default Collection;