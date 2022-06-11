function Frame({ frame, setFrame }) {
    return (
        <div className="frame" onClick={() => { setFrame(frame)}}>
            <img src={`${frame}.jpeg`} alt="pedalboard-frame"/>
            <h1>{frame}</h1>
        </div>
    )
}

export default Frame;