import FxItem from './FxItem.js'

function FxList({ effectsList, setSelectedEffect, setIsEffectSelected }){
    return (
        <div className="fx-container">
            {effectsList.map((fx, i) => {
                return <FxItem key={i} effect={fx} setSelectedEffect={setSelectedEffect} setIsEffectSelected={setIsEffectSelected}/>
            })}
        </div>
    )
}

export default FxList;