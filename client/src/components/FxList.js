import FxItem from './FxItem.js'

function FxList({ effectsList }){
    return (
        <div className="fx-container">
            {effectsList.map((fx, i) => {
                return <FxItem key={i} effect={fx}/>
            })}
        </div>
    )
}

export default FxList;