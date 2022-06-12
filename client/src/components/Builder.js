import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import PedalsContainer from './PedalsContainer';
import Pedalboard from './Pedalboard';
import FramesList from './FramesList';
import BrandsList from './BrandsList';
import FxList from './FxList';

function Builder() {
    const [pedals, setPedals] = useState([])

    const [filteredPedals, setFilteredPedals] = useState([])

    const [isBoardContainerVisible, setIsBoardContainerVisible] = useState(false)
    const [isPedalContainerVisible, setIsPedalContainerVisible] = useState(true)

    const framesList = ['BCB-30X', 'BCB-90X', 'BCB-1000', 'PROFX', 'PT-MMAX', 'PT-NMAX', 'PT3', 'PTJR-MAX']
    const [selectedFrame, setSelectedFrame] = useState('')
    const [isFramesSelectVisible, setIsFramesSelectVisible] = useState(false)
    const [isFrameSelected, setIsFrameSelected] = useState(false)

    const brandsList = ['TC Electronic', 'Dunlop', 'MXR', 'Boss', 'Walrus Audio', 'Strymon', 'Way Huge', 'Seymour Duncan', 'Darkglass']
    const [isBrandsListVisible, setIsBrandsListVisible] = useState(false)
    const [selectedBrand, setSelectedBrand] = useState('')

    const effectsList = ['Distortion / Gain', 'Compression / EQ', 'Reverb / Delay', 'Modulation', 'Expression']
    const [isFXListVisible, setIsFXListVisible] = useState(false)
    const [selectedEffect, setSelectedEffect] = useState('')

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
    useEffect(() => {request()}, [filteredPedals])

    const resetMenu = () => {
        setSelectedBrand('')
        setSelectedEffect('')
        setFilteredPedals([])
    }

    const handleBoardVisibleClick = () => {
        setIsBoardContainerVisible(!isBoardContainerVisible)
    }

    const filterByBrandAndEffect = (p) => {
        if (p.brand === selectedBrand && p.effect === selectedEffect)
        return true
    }
    const handleModelClick = () => {
            let f = pedals.filter(filterByBrandAndEffect)
            setFilteredPedals(f)
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

                    framesList={framesList}
                    isFramesSelectVisible={isFramesSelectVisible}
                    setIsFramesSelectVisible={setIsFramesSelectVisible}
                    setSelectedFrame={setSelectedFrame}
                    setIsFrameSelected={setIsFrameSelected}

                    brandsList={brandsList}
                    isBrandsListVisible={isBrandsListVisible}
                    setIsBrandsListVisible={setIsBrandsListVisible}
                    setSelectedBrand={setSelectedBrand}

                    effectsList={effectsList}
                    isFXListVisible={isFXListVisible}  
                    setIsFXListVisible={setIsFXListVisible}
                    setSelectedEffect={setSelectedEffect}

                    isPedalContainerVisible={isPedalContainerVisible}
                    setIsPedalContainerVisible={setIsPedalContainerVisible}


                    handleModelClick={handleModelClick}
                />
            </div>
            {isPedalContainerVisible ? <PedalsContainer filteredPedals={filteredPedals}
                /> 
            : null}
            <button onClick={() => {resetMenu()}}>Reset Search</button>
            <button className="window-button" onClick={handleBoardVisibleClick}>Hide/Show Board</button>
            {isBoardContainerVisible ? <Pedalboard 
                selectedFrame={selectedFrame} 
                isFrameSelected={isFrameSelected}
                /> 
            : null}
        </div>
    )
}

export default Builder;