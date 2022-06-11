import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import Pedals from './Pedals';
import Pedalboard from './Pedalboard';
import FramesList from './FramesList';

function Builder() {
    const [pedals, setPedals] = useState([])

    const framesList = ['BCB-30X', 'BCB-90X', 'BCB-1000', 'PROFX', 'PT-MMAX', 'PT-NMAX', 'PT3', 'PTJR-MAX']
    const [selectedFrame, setSelectedFrame] = useState('')
    const [isFramesSelectVisible, setIsFramesSelectVisible] = useState(false)
    const [isFrameSelected, setIsFrameSelected] = useState(false)

    const [isBoardContainerVisible, setIsBoardContainerVisible] = useState(false)
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

    const handleBoardVisibleClick = () => {
        setIsBoardContainerVisible(!isBoardContainerVisible)
    }

    return (
        <div>
            <Link to="/">
                <button className="home-button">HOME</button>
            </Link>
            <h1 className="builder-header">Build Your Board</h1>
            <div>
                <Menu 
                    pedals={pedals}
                    setPedals={setPedals}
                    isFramesSelectVisible={isFramesSelectVisible}
                    setIsFramesSelectVisible={setIsFramesSelectVisible}
                />
            </div>
            {isFramesSelectVisible ? <FramesList 
                framesList={framesList} 
                selectedFrame={selectedFrame} 
                setSelectedFrame={setSelectedFrame} 
                setIsFrameSelected={setIsFrameSelected}
                isFrameSelected={isFrameSelected}
                /> 
            : null }
            <button className="window-button" onClick={handleBoardVisibleClick}>Hide/Show Board</button>
            {isBoardContainerVisible ? <Pedalboard selectedFrame={selectedFrame} isFrameSelected={isFrameSelected}/> : null}
        </div>
    )
}

export default Builder;