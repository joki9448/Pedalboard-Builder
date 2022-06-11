import Frame from './Frame';

function Menu({ framesList, 
                selectedFrame, 
                setSelectedFrame,
                isFramesListVisible,
                setIsFramesListVisible 
            }){
    // const handleBrandClick = () => {
    //     // alert('Clicked')
    //     return !isBrandVisible
    // }
    // const handleSelectPedalboard = (e) => {
    //     // alert('Clicked')
    //     setPedalboard(e.target.textContent)
    // }
    return (
        <div>
            <h1>Menu</h1>
            <button>Select Pedalboard</button>
            <button>Select Brand</button>
            <button>Select Type</button>
            <button>Select Model</button>
        </div>
    )
}

export default Menu;