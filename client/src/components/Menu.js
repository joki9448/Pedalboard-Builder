import Pedals from './Pedals'

function Menu({ pedals, isBrandVisible, setIsBrandVisible, setPedalboard }) {
    const { model, effect } = pedals

    // const handleBrandClick = () => {
    //     // alert('Clicked')
    //     return !isBrandVisible
    // }
    const handleSelectPedalboard = () => {
        alert('Clicked')
    }
    return (
        <div>
            <h1>Menu</h1>
            <button onClick={handleSelectPedalboard}>Select Pedalboard</button>
            <button>Select Brand</button>
            <button>Select Type</button>
            <button>Select Model</button>
        </div>
    )
}

export default Menu;