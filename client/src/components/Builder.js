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

    // console.log('state of filteredPedals after setting filters: ', filteredPedals)

    const request = async () => {
        try {
            let req = await fetch('/pedals')
            let res = await req.json()
            console.log('res', res)
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
        console.log('id of the pedal being dragged: ', droppedPedal)
        console.log('PEDALS', pedals)
        // const droppedPedal = pedals.all.find((pedal) => {
        //     console.log('filtered ped', pedal)
        //     return id == pedal.id
        // })
        // setPedals(prevState => {
        //     return {...prevState, ['dropped']: [...prevState.dropped, droppedPedal]}
        // })
        setPedals({all: [...pedals.all], filtered: [...pedals.filtered], dropped: [...pedals.dropped, droppedPedal]})
        console.log('dropped pedals', pedals.dropped)
        // console.log('dropped images array (inside addImageToBoard): ', droppedPedal[0])
        // setDroppedPedals((board) => [...board, droppedPedal])
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
                droppedIds.push(p.id)
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
        <div>
            {/* <h1>{pedals.all?.length}</h1> */}
            <Link to="/">
                <button className="home-button">HOME</button>
            </Link>
            <h1 className="builder-header">Build Your Board</h1>
            <div>
                <Menu 
                    // pedals={pedals}
                    // setPedals={setPedals}

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

            {isPedalContainerVisible ? <PedalsContainer filteredPedals={pedals.filtered}
                /> 
            : null}

            {/* <button onClick={() => {resetMenu()}}>Reset Search</button> */}

            <button className="window-button" onClick={handleBoardVisibleClick}>Hide/Show Board</button>

            {isBoardContainerVisible ? <Pedalboard 
                selectedFrame={selectedFrame} 
                isFrameSelected={isFrameSelected}
                onDrop={handleDragOver}
                pedals={pedals}
                /> 
            : null}

            {/* Drop area testing */}
            {/* <div className="board" onDrop={handleDragOver}>
                {console.log('dropped pedals array: ', droppedPedals)}
                {
                  pedals.dropped.map((p) => {
                    return(
                      <div key={p.id}>
                        <p>{p.model} - {p.id}</p>
                        <SelectedPedals p={p}/>
                      </div>
                    )
                  })
                }
            </div> */}
        </div>
    )
}

export default Builder;