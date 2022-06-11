function FrameItem({ frameOptions, setSelectedFrame, setIsFrameSelected}) {
    // console.log(frame)
    return (
        <div className="frameslist-container" onClick={(e) => {setSelectedFrame(e.target.textContent); setIsFrameSelected(true)}}>
            { frameOptions }
        </div>
    )
}

export default FrameItem;