import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import Pedals from './Pedals';
import Pedalboard from './Pedalboard';

function Builder() {
    const [pedals, setPedals] = useState([])
    const [pedalboard, setPedalboard] = useState('')
    // const [selectedPedals, setSelectedPedals] = useState([])
    const [isBrandVisible, setIsBrandVisible] = useState(false)
    const [isBoardVisible, setIsBoardVisible] = useState(false)

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

    const handleBoardVisibleClick = () => {
        setIsBoardVisible(!isBoardVisible)
    }

    return (
        <div>
            <Link to="/">
                <button className="home-button">HOME</button>
            </Link>
            <h1>Build Your Board</h1>
            <div className="menu-container">
                <Menu pedals={pedals}
                      setPedals={setPedals}
                      isBrandVisible={isBrandVisible}
                      setIsBrandVisible={setIsBrandVisible}
                      setPedalboard={setPedalboard}
                />
            </div>
            {pedals.map((p) => {
                return <Pedals key={p.id} pedals={p} />
            })}
            <button className="window-button" onClick={handleBoardVisibleClick}>Hide/Show Board</button>
            {isBoardVisible ? <Pedalboard pedalboard={pedalboard}/> : null}
        </div>
    )
}

export default Builder;