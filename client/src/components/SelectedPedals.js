
function SelectedPedals({ p }){
    // const { brand, model, effect } = p
    return (
        <div>
            <img
                src={`/images/${p.brand.replace(' ', '-').toLowerCase()}/${p.effect.replace(' / ', '-').toLowerCase()}/${p.model.replace(' ', '-').toLowerCase()}.jpeg`}
            />
        </div>
    )
}

export default SelectedPedals;