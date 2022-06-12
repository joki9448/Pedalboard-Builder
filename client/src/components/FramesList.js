import FrameItem from './FrameItem';

function FramesList({ 
        framesList, 
        setSelectedFrame, 
        setIsFrameSelected,
        }){
    
    return (
        <div className="frameslist-container">
            {
                framesList.map((frame, i) => {
                    return <FrameItem 
                        key={i} 
                        frameOptions={frame} 
                        setSelectedFrame={setSelectedFrame} 
                        setIsFrameSelected={setIsFrameSelected}
                    />
                })
            }

        </div>
    )
}

export default FramesList;