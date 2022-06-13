import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Menu from './Menu';
import PedalsContainer from './PedalsContainer';
import Pedalboard from './Pedalboard';
import PedalItem from './PedalItem';

function Builder() {
    const [pedals, setPedals] = useState([])

    const [filteredPedals, setFilteredPedals] = useState([])
    console.log('global filteredPedals ', filteredPedals)

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

    const [board, setBoard] = useState([])
    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addImageToBoard = (id) => {
        const pedalList = filteredPedals.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pedalList[0]])
    }
    
    const request = async () => {
        try {
            let req = await fetch('/pedals')
            let res = await req.json()
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
        return p
    }
    const handleModelClick = () => {
            let f = pedals.filter(filterByBrandAndEffect)
            setFilteredPedals(f)
            console.log('just after setting filtered pedals ', filteredPedals)
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
            <div className="board" ref={drop}>
                {board.map((p, i) => {
                    return <PedalItem id={p.id} pedals={p}/>
                })}

            </div>
        </div>
    )
}

export default Builder;