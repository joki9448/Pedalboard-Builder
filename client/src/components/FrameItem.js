function FrameItem({ frame, setSelectedFrame }) {
    console.log(frame)
    return (
        <div className="frameslist-container" onClick={(e) => {console.log(e.target.textContent)}}>
            { frame }
        </div>
    )
}

export default FrameItem;