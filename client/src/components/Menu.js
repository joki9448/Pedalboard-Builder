import FramesList from './FramesList';


function Menu({
                isFramesSelectVisible,
                setIsFramesSelectVisible,
                framesList,
                setSelectedFrame,
                setIsFrameSelected,
                isBrandsListVisible,
                setIsBrandsListVisible,
                isFXListVisible,
                setIsFXListVisible,
                handleModelClick,
            }){
                
    return (
        <div className="menu-container">
            <h1>Menu</h1>
            <div className="frames-dropdown" onMouseEnter={() => {setIsFramesSelectVisible(true)}} onMouseLeave={() => {setIsFramesSelectVisible(false)}}>
                Select Pedalboard Frame
                {isFramesSelectVisible ? <FramesList 
                    framesList={framesList}
                    setSelectedFrame={setSelectedFrame}
                    setIsFrameSelected={setIsFrameSelected}
                /> 
                : null}
            </div>
            {/* <button onClick={() => setIsFramesSelectVisible(!isFramesSelectVisible)}>Select Pedalboard</button> */}
            {/* <button className="menu-select-button" 
                    onMouseEnter={() => {setIsFramesSelectVisible(true)}} 
                    onMouseLeave={() => {setIsFramesSelectVisible(false)}}
            >
                Select Pedalboard
            </button> */}
            {/* <button onClick={() => setIsBrandsListVisible(!isBrandsListVisible)}>Select Brand</button>
            <button onClick={() => setIsFXListVisible(!isFXListVisible)}>Select Type</button>
            <button onClick={() => {handleModelClick()}}>Select Model</button> */}
        </div>
    )
}

export default Menu;