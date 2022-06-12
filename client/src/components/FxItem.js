function FxItem({ effect, setSelectedEffect }) {
    return (
        <ul className="fx-item" onClick={(e) => {console.log(e.target.textContent); setSelectedEffect(e.target.textContent)}}>
            { effect }
        </ul>
    )
}

export default FxItem;