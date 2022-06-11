import Frame from './Frame';

function Pedalboard({ frames, frame, setFrame }) {
    return (
        <div className="pedalboard-container">
            {
                frames.map((f, i) => {
                    return <Frame key={i} frame={frame} setFrame={setFrame} />
                })
            }
        </div>
    )
}

export default Pedalboard;