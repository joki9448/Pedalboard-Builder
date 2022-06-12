function FrameItem({ frameOptions, 
                      setSelectedFrame, 
                      setIsFrameSelected,
                    }) {
    // console.log(frame)
    return (
        <ul className="frameslist-item" 
            onClick={(e) => {setSelectedFrame(e.target.textContent); setIsFrameSelected(true)}}
            // onMouseEnter={() =>{setIsFramesSelectVisible(true)}}  
        >
            { frameOptions }
        </ul>
    )
}

export default FrameItem;