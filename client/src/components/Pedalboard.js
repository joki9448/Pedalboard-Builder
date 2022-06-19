import SelectedPedals from './SelectedPedals';
import PedalItem from './PedalItem';
import DropZone from './DropZone';

function Pedalboard({ selectedFrame, isFrameSelected, onDrop, pedals }) {
    // console.log('from pedalboard: ', board)
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
                                <SelectedPedals p={p}/>
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