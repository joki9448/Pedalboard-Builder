import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import Pedals from './Pedals';

function Builder() {
    const [pedals, setPedals] = useState([])
    const [isBrandVisible, setIsBrandVisible] = useState(false)
    
    const request = async () => {
        try {
            let req = await fetch('/pedals')
            let res = await req.json()
            // console.log('animelist res', res)
            setPedals(res)
        }   catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {request()}, [])

    return (
        <div>
            <Link to="/">
                <button>HOME</button>
            </Link>
            <h1>Build Your Board</h1>
            <div className="menu-container">
                <Menu pedals={pedals}
                      setPedals={setPedals}
                      isBrandVisible={isBrandVisible}
                      setIsBrandVisible={setIsBrandVisible}
                />
            </div>
            {pedals.map((p) => {
                return <Pedals key={p.id} pedals={p} />
            })}
        </div>
    )
}

export default Builder;