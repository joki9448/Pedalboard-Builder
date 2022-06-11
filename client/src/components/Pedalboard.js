function Pedalboard({ pedalboard }) {
    return (
        <div className="pedalboard-container">
            {/* <img src="/images/Frames/BCB-1000.jpeg" alt="pedalboardcontainertestimage" height="800" width="1300"/> */}
            <img src={ pedalboard } alt="selectedpedalboard"/>
        </div>
    )
}

export default Pedalboard;