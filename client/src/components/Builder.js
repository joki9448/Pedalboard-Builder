import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Menu from './Menu';
import PedalsContainer from './PedalsContainer';
import Pedalboard from './Pedalboard';
import SignalPath from './SignalPath';
import { AiFillPlayCircle } from 'react-icons/ai'

function Builder() {

    const [pedals, setPedals] = useState({all: [], filtered: [], dropped: []})

    let signalChain = pedals.dropped

    // console.log('state of filteredPedals after setting filters: ', filteredPedals)
    // console.log('dropped', pedals.dropped)
    // const { brand, model, effect } = pedals.dropped
    // console.log('signalChain: ', signalChain)

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

        if (isBrandSelected === false && isEffectSelected === true) {
            alert('Please select a brand!')
        } else if (isEffectSelected === false && isBrandSelected === true) {
            alert('Please select an effect type!')
        } else if (isBrandSelected === false && isEffectSelected === false) {
            alert('Please select brand and effect!')
        }
        setPedals(prevState => {
            return {...prevState, filtered: f}
        });
        // console.log('filtered', pedals.filtered)
    }

    // Toggle pedalboard view
    const [isBoardContainerVisible, setIsBoardContainerVisible] = useState(false)
    const [isPedalContainerVisible, setIsPedalContainerVisible] = useState(true)

    // Menu State
    const framesList = ['BCB-30X', 'BCB-90X', 'BCB-1000', 'PROFX', 'PT-MMAX', 'PT-NMAX', 'PT3', 'PTJR-MAX']
    const [isFramesSelectVisible, setIsFramesSelectVisible] = useState(false)
    const [isFrameSelected, setIsFrameSelected] = useState(false)
    const [selectedFrame, setSelectedFrame] = useState('')

    const brandsList = ['TC Electronic', 'Dunlop', 'MXR', 'Boss', 'Walrus Audio', 'Strymon', 'Wampler', 'Seymour Duncan']
    const [isBrandsListVisible, setIsBrandsListVisible] = useState(false)
    const [selectedBrand, setSelectedBrand] = useState('')
    const [isBrandSelected, setIsBrandSelected] = useState(false)

    const effectsList = ['Distortion / Gain', 'Compression / EQ', 'Reverb / Delay', 'Modulation', 'Expression']
    const [isFXListVisible, setIsFXListVisible] = useState(false)
    const [selectedEffect, setSelectedEffect] = useState('')
    const [isEffectSelected, setIsEffectSelected] = useState(false)

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

    // Callbacks
    const handleBoardVisibleClick = () => {
        setIsBoardContainerVisible(!isBoardContainerVisible)
    }

    const filterByBrandAndEffect = (p) => {
      return (p.brand === selectedBrand && p.effect === selectedEffect)
    }

    const handleRemovePedal = () => {
    }

    const handleBoardSubmit = async () => {
        try {
            let req = await fetch(`/configs`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ chain: signalChain })
            })
            // if request successful, alert (res.ok)
            // let res = await req.json()
            // console.log('post res:', res)
        }   catch (error) {
            alert(error.message)
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        let model = e.dataTransfer.getData("model")
        let id = e.dataTransfer.getData("id")
        // console.log('Dragged item V', model, id)
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
            // Try else if's to stop drop if max pedal limit is reached
            // May have to account for each pedalboard frame size
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
                <button className="home-button">Home</button>
            </Link>
            <div className="builder-head-layer"></div>
            <button className="submit-button" onClick={(e) => {
                e.preventDefault()
                handleBoardSubmit()
                // This alert should not be needed after res.ok alert is implemented
                alert('Board Saved!')
            }}>
                Save Board
            </button>

            <h1 className="builder-header">Build Your Board</h1>
            <div className="builder-nav-layer"></div>

            <button className="browse-button"onClick={() => {handleModelClick()}}>
                <div>
                  <AiFillPlayCircle />
                </div>
            </button>
            <button className="pb-button" onClick={handleBoardVisibleClick}>
                {isBoardContainerVisible ? "Hide Frame" : "Show Frame"}
            </button>  

            {/* <div className="signal-container">
                {pedals.dropped.map((p, i) => {
                    return <SignalPath key={i} path={p} />
                })}
            </div> */}
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
                    setIsBrandSelected={setIsBrandSelected}

                    effectsList={effectsList}
                    isFXListVisible={isFXListVisible}  
                    setIsFXListVisible={setIsFXListVisible}
                    setSelectedEffect={setSelectedEffect}
                    setIsEffectSelected={setIsEffectSelected}

                    isPedalContainerVisible={isPedalContainerVisible}
                    setIsPedalContainerVisible={setIsPedalContainerVisible}

                    handleModelClick={handleModelClick}

                    handleBoardVisibleClick={handleBoardVisibleClick}

                    isBoardContainerVisible={isBoardContainerVisible}
                />
            </div>

            {isPedalContainerVisible ? <PedalsContainer 
                filteredPedals={pedals.filtered}
                /> 
            : null}

            {isBoardContainerVisible ? <Pedalboard 
                selectedFrame={selectedFrame} 
                isFrameSelected={isFrameSelected}
                onDrop={handleDragOver}
                pedals={pedals}
                handleRemovePedal={handleRemovePedal}
                /> 
            : null}
        </div>
    )
}

export default Builder;