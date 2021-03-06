import FramesList from './FramesList';
import BrandsList from './BrandsList';
import FxList from './FxList'

function Menu({
                isFramesSelectVisible,
                setIsFramesSelectVisible,
                framesList,
                setSelectedFrame,
                setIsFrameSelected,

                brandsList,
                isBrandsListVisible,
                setIsBrandsListVisible,
                setSelectedBrand,
                setIsBrandSelected,

                effectsList,
                isFXListVisible,
                setIsFXListVisible,
                setSelectedEffect,
                setIsEffectSelected,

                handleModelClick,
                handleBoardVisibleClick,
                isBoardContainerVisible,
            }){
                
    return (
        <div className="menu-container">
            {/* <h1 className="menu-header">Menu</h1> */}
            <div className="dropdown-list" onMouseEnter={() => {setIsFramesSelectVisible(true)}} onMouseLeave={() => {setIsFramesSelectVisible(false)}}>
                Select Frame
                {isFramesSelectVisible ? <FramesList 
                    framesList={framesList}
                    setSelectedFrame={setSelectedFrame}
                    setIsFrameSelected={setIsFrameSelected}
                /> 
                : null}
            </div>
            <div className="dropdown-list" onMouseEnter={() => {setIsBrandsListVisible(true)}} onMouseLeave={() => {setIsBrandsListVisible(false)}}>
                Select Brand
                {isBrandsListVisible ? <BrandsList 
                    brandsList={brandsList}
                    setSelectedBrand={setSelectedBrand}
                    setIsBrandSelected={setIsBrandSelected}
                /> 
                : null}
            </div>
            <div className="dropdown-list" onMouseEnter={() => {setIsFXListVisible(true)}} onMouseLeave={() => {setIsFXListVisible(false)}}>
                Select Effect
                {isFXListVisible ? <FxList 
                    effectsList={effectsList}
                    setSelectedEffect={setSelectedEffect}
                    setIsEffectSelected={setIsEffectSelected}
                /> 
                : null}
            </div>
            </div>
    )
}

export default Menu;