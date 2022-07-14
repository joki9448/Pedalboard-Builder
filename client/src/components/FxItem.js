function FxItem({ effect, setSelectedEffect, setIsEffectSelected }) {
    return (
        <ul className="fx-item" onClick={(e) => 
            {console.log('fx filter: ', e.target.textContent); 
            setSelectedEffect(e.target.textContent);
            setIsEffectSelected(true);
            }}>

            { effect }

        </ul>
    )
}

export default FxItem;