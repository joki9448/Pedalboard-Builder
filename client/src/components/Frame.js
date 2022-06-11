function Frame({ frames, frameState, setFrameState }) {
    return (
        <div className="frame" onClick={() => {setFrameState(frameState)}}>
            <img src={`/images/Frames/${frames}.jpeg`} alt="pedalboard-frame"/>
            <h1>{frameState}</h1>
        </div>
    )
}

export default Frame;