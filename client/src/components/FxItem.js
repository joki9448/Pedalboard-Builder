function FxItem({ effect, setSelectedEffect }) {
    return (
        <div className="fx-item" onClick={(e) => {console.log(e.target.textContent); setSelectedEffect(e.target.textContent)}}>
            { effect }
        </div>
    )
}

export default FxItem;