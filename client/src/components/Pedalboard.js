
function Pedalboard({ selectedFrame, isFrameSelected }) {
    // console.log('from pedalboard: ', board)

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