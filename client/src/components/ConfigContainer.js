function ConfigContainer({ config, isTextVisible, setIsTextVisible }) {
    console.log('config', config)
    const { brand, model, effect } = config

    const handleMouseEnter = () => {
        setIsTextVisible(true)
    }
    const handleMouseLeave = () => {
        setIsTextVisible(false)
    }
    return (
        <div>
            <img
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="config-item"
                src={`/images/${brand.replace(' ', '-').toLowerCase()}/${effect.replace(' / ', '-').toLowerCase()}/${model.replace(' ', '-').toLowerCase()}.jpeg`}
            />
            <div className="model-text">{isTextVisible ? model : null}</div>
            <div className="effect-text">{isTextVisible ? effect : null}</div>
        </div>
    )
}

export default ConfigContainer;