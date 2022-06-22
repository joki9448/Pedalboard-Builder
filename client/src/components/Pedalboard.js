import SelectedPedals from './SelectedPedals';

function Pedalboard({ selectedFrame, isFrameSelected, onDrop, pedals, handleRemovePedal}) {
    // console.log('from pedalboard: ', board)

    // create a component that pops up as an alert
    if(isFrameSelected === false) {
        return "Please select a pedalboard!"
    }
    return (
        <div className="pb-window" onDrop={onDrop}>
            <div className="selectedpedals-container">
                {
                    pedals.dropped.map((p) => {
                        return(
                            <div key={p.id}>
                                {/* <p>{p.model} - {p.id}</p> */}
                                <SelectedPedals p={p} handleRemovePedal={handleRemovePedal} />
                           </div>
                        )
                    })
                }
            </div>
            <img className="pb-img" src={`/images/Frames/${selectedFrame}.jpeg`}/>
        </div>
    )
}

export default Pedalboard;