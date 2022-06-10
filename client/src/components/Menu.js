import Pedals from './Pedals'

function Menu({ pedals, setPedals }) {

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