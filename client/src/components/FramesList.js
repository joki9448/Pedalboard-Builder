import FrameItem from './FrameItem';

function FramesList({ 
        framesList, 
        setSelectedFrame, 
        selectedFrame, 
        setIsFrameSelected 
        }){
    
    return (
        <div className="frameslist-container">
            {
                framesList.map((frame, i) => {
                    return <FrameItem key={i} frameOptions={frame} setSelectedFrame={setSelectedFrame} selectedFrame={selectedFrame} setIsFrameSelected={setIsFrameSelected}/>
                })
            }
        </div>
    )
}

export default FramesList;