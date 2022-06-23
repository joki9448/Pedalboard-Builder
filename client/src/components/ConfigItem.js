function ConfigItem({ configs, isTextVisible }) {
    console.log('config item', configs)
    const { brand, model, effect } = configs
    return (
        <div>
            <img
                className="config-item"
                src={`/images/${brand.replace(' ', '-').toLowerCase()}/${effect.replace(' / ', '-').toLowerCase()}/${model.replace(' ', '-').toLowerCase()}.jpeg`}
            />
            <div className="text-container">
                <div className="model-text">{isTextVisible ? model : null}</div>
                <div className="effect-text">{isTextVisible ? brand : null}</div>
            </div>
        </div>
    )
}

export default ConfigItem;