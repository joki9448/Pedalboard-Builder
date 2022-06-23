function ConfigContainer({ config }) {
    console.log('config', config)
    const { brand, model, effect } = config
    return (
        <div>
            <img
                className="config-item"
                src={`/images/${brand.replace(' ', '-').toLowerCase()}/${effect.replace(' / ', '-').toLowerCase()}/${model.replace(' ', '-').toLowerCase()}.jpeg`}
            />
        </div>
    )
}

export default ConfigContainer;