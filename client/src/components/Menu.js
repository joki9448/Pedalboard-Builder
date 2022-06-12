function Menu({
                isFramesSelectVisible,
                setIsFramesSelectVisible,
                isBrandsListVisible,
                setIsBrandsListVisible,
                isFXListVisible,
                setIsFXListVisible
            }){
                
    return (
        <div className="menu-container">
            <h1>Menu</h1>
            <button onClick={() => setIsFramesSelectVisible(!isFramesSelectVisible)}>Select Pedalboard</button>
            <button onClick={() => setIsBrandsListVisible(!isBrandsListVisible)}>Select Brand</button>
            <button onClick={() => setIsFXListVisible(!isFXListVisible)}>Select Type</button>
            <button>Select Model</button>
        </div>
    )
}

export default Menu;