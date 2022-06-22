import PedalItem from './PedalItem'

function PedalsContainer({ filteredPedals }) {
    // console.log('from pedalscontainer', filteredPedals)
    if(filteredPedals.length === 0) {
        return null
    }
    
    return (
        <div className="pedals-container">
            {
                filteredPedals.map((p, i) => {
                    return(
                        <div key={i}>
                            <PedalItem 
                                pedals={p}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PedalsContainer;