function PedalItem({ pedals }) {
    console.log('from pedalitem', pedals)
    const { brand, effect, model } = pedals
    return (
        <div>
            <img src={`/images/${brand.replace(' ', '-').toLowerCase()}/${effect.replace(' / ', '-').toLowerCase()}/${model.replace(' ', '-').toLowerCase()}.jpeg`}/>
            {model}
        </div>
    )
}

export default PedalItem;