import PedalItem from './PedalItem'

function PedalsContainer({ filteredPedals }) {
    // console.log('from pedalscontainer', filteredPedals)
    return (
        <div className="pedals-container">
            {
                filteredPedals.map((p, i) => {
                    return <PedalItem key={i} pedals={p}/>
                })
            }
        </div>
    )
}

export default PedalsContainer;