import FxItem from './FxItem.js'

function FxList({ effectsList, setSelectedEffect }){
    return (
        <div className="fx-container">
            {effectsList.map((fx, i) => {
                return <FxItem key={i} effect={fx} setSelectedEffect={setSelectedEffect}/>
            })}
        </div>
    )
}

export default FxList;