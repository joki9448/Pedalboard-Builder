import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Menu from './Menu';
import PedalsContainer from './PedalsContainer';
import Pedalboard from './Pedalboard';
// import PedalItem from './PedalItem';

function Builder() {

    // const [pedals, setPedals] = useState([])
    // const [filteredPedals, setFilteredPedals] = useState([])
    // const [droppedPedals, setDroppedPedals] = useState([])
    const [pedals, setPedals] = useState({all: [], filtered: [], dropped: []})
    console.log('dropped pedals array: ', pedals.dropped)
    const { id, brand, model, effect } = pedals.dropped
    // console.log('state of filteredPedals after setting filters: ', filteredPedals)

    const request = async () => {
        try {
            let req = await fetch('/pedals')
            let res = await req.json()
            // console.log('res', res)
            setPedals(prevState => {
              return {...prevState, ['all']: res}
            })
        }   catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        request()
    }, [])

    // For filtering pedals in menu
    const handleModelClick = () => {
        let f = pedals.all.filter((ped) => ped.brand === selectedBrand && ped.effect === selectedEffect)
        setPedals(prevState => {
            return {...prevState, filtered: f}
        })
        console.log('filtered', pedals.filtered)
    }

    // Toggle pedalboard view
    const [isBoardContainerVisible, setIsBoardContainerVisible] = useState(false)
    const [isPedalContainerVisible, setIsPedalContainerVisible] = useState(true)

    // Menu State
    const framesList = ['BCB-30X', 'BCB-90X', 'BCB-1000', 'PROFX', 'PT-MMAX', 'PT-NMAX', 'PT3', 'PTJR-MAX']
    const [isFramesSelectVisible, setIsFramesSelectVisible] = useState(false)
    const [isFrameSelected, setIsFrameSelected] = useState(false)
    const [selectedFrame, setSelectedFrame] = useState('')

    const brandsList = ['TC Electronic', 'Dunlop', 'MXR', 'Boss', 'Walrus Audio', 'Strymon', 'Way Huge', 'Seymour Duncan', 'Darkglass']
    const [isBrandsListVisible, setIsBrandsListVisible] = useState(false)
    const [selectedBrand, setSelectedBrand] = useState('')

    const effectsList = ['Distortion / Gain', 'Compression / EQ', 'Reverb / Delay', 'Modulation', 'Expression']
    const [isFXListVisible, setIsFXListVisible] = useState(false)
    const [selectedEffect, setSelectedEffect] = useState('')


    // React DnD
    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item),
        collect: (monitor) => ({ 
            isOver: !!monitor.isOver()
        })
    }))

    const addImageToBoard = (droppedPedal) => {
        // console.log('id of the pedal being dragged: ', droppedPedal)
        // console.log('PEDALS', pedals)
        setPedals({all: [...pedals.all], filtered: [...pedals.filtered], dropped: [...pedals.dropped, droppedPedal]})
        console.log('dropped pedals', pedals.dropped)
    }

    // const resetMenu = () => {
    //     setSelectedBrand('')
    //     setSelectedEffect('')
    //     setPedals({all: [], filtered: [], dropped: []})
    // } 

    // Callbacks
    const handleBoardVisibleClick = () => {
        setIsBoardContainerVisible(!isBoardContainerVisible)
    }

    const filterByBrandAndEffect = (p) => {
      return (p.brand === selectedBrand && p.effect === selectedEffect)
    }

    const handleBoardSubmit = async () => {
        let req = await fetch('/configs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ id: id, brand: brand, model: model, effect: effect })
        })
        let res = req.json()
        console.log('post res: ', res)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        let model = e.dataTransfer.getData("model")
        let id = e.dataTransfer.getData("id")
        console.log('Dragged item V', model, id)
        let foundPedal = pedals.all.find((ped) => ped.id == id)
        
        setPedals((prevState) => {
            // console.log('dropped pedal objs', prevState.dropped)
            let droppedIds = []
            let stopDuplicates = prevState.dropped.filter((p) => {
                droppedIds.unshift(p.id)
                return droppedIds
                // console.log('foundPedal obj in stopduplicates', foundPedal.id)
            })
            // console.log('dropped ids', droppedIds)
            if (!droppedIds.includes(foundPedal.id))
                return {...prevState, ['dropped']: [...prevState.dropped, foundPedal]}
            else
                return {...prevState, ['dropped']: [...prevState.dropped]}
        })
    }

    return (
        <div className="builder-page">
            {/* <h1>{pedals.all?.length}</h1> */}
            <Link to="/">
                <button className="home-button">HOME</button>
            </Link>
            <button className="submit-button" onClick={(e) => {
                e.preventDefault()
                handleBoardSubmit()
            }}>
                Save Board
            </button>
            <h1 className="builder-header">Build Your Board</h1>
            <div>
                <Menu 
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

                    handleBoardVisibleClick={handleBoardVisibleClick}

                    isBoardContainerVisible={isBoardContainerVisible}
                />
            </div>

            {isPedalContainerVisible ? <PedalsContainer filteredPedals={pedals.filtered}
                /> 
            : null}

            {isBoardContainerVisible ? <Pedalboard 
                selectedFrame={selectedFrame} 
                isFrameSelected={isFrameSelected}
                onDrop={handleDragOver}
                pedals={pedals}
                /> 
            : null}

            {/* <button onClick={() => {resetMenu()}}>Reset Search</button> */}

        </div>
    )
}

export default Builder;