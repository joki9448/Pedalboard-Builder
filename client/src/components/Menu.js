import Pedals from './Pedals'

function Menu({ pedals, isBrandVisible, setIsBrandVisible }) {
    const { model, effect } = pedals

    // const handleBrandClick = () => {
    //     // alert('Clicked')
    //     return !isBrandVisible
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