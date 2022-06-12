function PedalItem({ pedals }) {
    console.log('from pedalitem', pedals)
    const { brand, effect, model } = pedals
    return (
        <div className="pedals-item">
            <img src={`/images/${brand.replace(' ', '-').toLowerCase()}/${effect.replace(' / ', '-').toLowerCase()}/${model.replace(' ', '-').toLowerCase()}.jpeg`}/>
        </div>
    )
}

export default PedalItem;