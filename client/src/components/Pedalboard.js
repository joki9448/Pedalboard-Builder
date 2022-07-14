import SelectedPedals from './SelectedPedals';

function Pedalboard({ selectedFrame, isFrameSelected, setIsBoardContainerVisible, onDrop, pedals, handleRemovePedal}) {
    // console.log('from pedalboard: ', board)
    const frameNotSelected = () => {
        alert('Please select a board frame!')
    }

    if(isFrameSelected === false) {
        frameNotSelected();
        setIsBoardContainerVisible(false);
        return <div className="no-frame"></div>
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