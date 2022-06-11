import FrameItem from './FrameItem';

function FramesList({ framesList, setSelectedFrame }) {
    console.log(framesList)
    
    return (
        <div className="frameslist-container">
            {
                framesList.map((frame) => {
                    return <FrameItem frame={frame} setSelectedFrame={setSelectedFrame}/>
                })
            }
        </div>
        // <div className="frame" onClick={() => {setFrameState(frameState)}}>
        //     {/* <img src={`/images/Frames/${frames}.jpeg`} alt="pedalboard-frame"/> */}
        //     {/* <h1>{frameState}</h1> */}
        // </div>
    )
}

export default FramesList;