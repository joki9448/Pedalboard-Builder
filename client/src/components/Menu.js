function Menu({
                isFramesSelectVisible,
                setIsFramesSelectVisible,
                isBrandsListVisible,
                setIsBrandsListVisible
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
        <div className="menu-container">
            <h1>Menu</h1>
            <button onClick={() => setIsFramesSelectVisible(!isFramesSelectVisible)}>Select Pedalboard</button>
            <button onClick={() => setIsBrandsListVisible(!isBrandsListVisible)}>Select Brand</button>
            <button>Select Type</button>
            <button>Select Model</button>
        </div>
    )
}

export default Menu;