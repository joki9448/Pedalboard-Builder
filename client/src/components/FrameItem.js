function FrameItem({ frameOptions, setSelectedFrame, setIsFrameSelected}) {
    // console.log(frame)
    return (
        <div className="frameslist-item" onClick={(e) => {setSelectedFrame(e.target.textContent); setIsFrameSelected(true)}}>
            { frameOptions }
        </div>
    )
}

export default FrameItem;