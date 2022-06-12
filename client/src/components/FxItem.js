function FxItem({ effect, setSelectedEffect }) {
    return (
        <div className="fx-item" onClick={(e) => {setSelectedEffect(e.target.textContent)}}>
            { effect }
        </div>
    )
}

export default FxItem;