function ConfigContainer({ config, isTextVisible, setIsTextVisible }) {
    console.log('config', config)
    const { brand, model, effect } = config
    return (
        <div>
            <img
                className="config-item"
                src={`/images/${brand.replace(' ', '-').toLowerCase()}/${effect.replace(' / ', '-').toLowerCase()}/${model.replace(' ', '-').toLowerCase()}.jpeg`}
            />
            <div className="model-text">{model}</div>
            <div className="effect-text">{effect}</div>
        </div>
    )
}

export default ConfigContainer;