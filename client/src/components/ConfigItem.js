function ConfigItem({ e }) {
    console.log('config item', e)
    return (
        <div>
            {/* <img
                className="config-item"
                src={`/images/${brand.replace(' ', '-').toLowerCase()}/${effect.replace(' / ', '-').toLowerCase()}/${model.replace(' ', '-').toLowerCase()}.jpeg`}
            />
            <div className="model-text">{isTextVisible ? model : null}</div>
            <div className="effect-text">{isTextVisible ? effect : null}</div> */}
        </div>
    )
}

export default ConfigItem;