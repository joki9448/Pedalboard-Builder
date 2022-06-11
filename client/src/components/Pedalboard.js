import Frame from './Frame';

function Pedalboard({ frames, frameState, setFrameState }) {
    return (
        <div className="pedalboard-container">
            <h1>Pedalboard</h1>
            {
                frames.map((f, i) => {
                    return <Frame key={i} frames={f} frame={frameState} setFrame={setFrameState} />
                })
            }
        </div>
    )
}

export default Pedalboard;