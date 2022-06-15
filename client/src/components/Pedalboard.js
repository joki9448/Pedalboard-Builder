import SelectedPedals from './SelectedPedals';


function Pedalboard({ selectedFrame, isFrameSelected, onDrop, pedals }) {
    // console.log('from pedalboard: ', board)

    if(isFrameSelected === false) {
        return "Please select a pedalboard!"
    }
    return (
        <div className="pedalboard-container" onDrop={onDrop}>
            <div className="selectedpedals-img">
                {
                    pedals.dropped.map((p) => {
                        return(
                            <div key={p.id}>
                                {/* <p>{p.model} - {p.id}</p> */}
                                <SelectedPedals p={p}/>
                            </div>
                        )
                    })
                }
                <img className="pedalboard-img" src={`/images/Frames/${selectedFrame}.jpeg`}/>
            </div>
        </div>
    )
}

export default Pedalboard;