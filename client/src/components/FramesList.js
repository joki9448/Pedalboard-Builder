import FrameItem from './FrameItem';

function FramesList({ 
        framesList, 
        setSelectedFrame, 
        selectedFrame, 
        setIsFrameSelected 
        }) 
    {
    
    return (
        <div>
            {
                framesList.map((frame, i) => {
                    return <FrameItem key={i} frameOptions={frame} setSelectedFrame={setSelectedFrame} selectedFrame={selectedFrame} setIsFrameSelected={setIsFrameSelected}/>
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