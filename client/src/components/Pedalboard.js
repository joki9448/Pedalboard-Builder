
function Pedalboard({ selectedFrame, isFrameSelected }) {

    if(isFrameSelected === false) {
        return "Please select a pedalboard!"
    }
    return (
        <div className="pedalboard-container">
            <img src={`/images/Frames/${selectedFrame}.jpeg`}/>
        </div>
    )
}

export default Pedalboard;