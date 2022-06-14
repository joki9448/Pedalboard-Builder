import PedalItem from './PedalItem'

function PedalsContainer({ filteredPedals }) {
    // console.log('from pedalscontainer', filteredPedals)
    return (
        <div className="pedals-container">
            {
                filteredPedals.map((p, i) => {
                    return(
                        <div key={i}>
                            <p>Test Pedal: {p.id}</p>
                            <PedalItem pedals={p}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PedalsContainer;