function PedalItem({ pedals }) {
    console.log('from pedalitem', pedals)
    const { brand, effect, model } = pedals
    return (
        <div>
            {model}
        </div>
    )
}

export default PedalItem;