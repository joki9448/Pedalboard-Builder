function ConfigItem({ configs, isTextVisible, setIsTextVisible }) {
    console.log('config item', configs)
    const { id, brand, model, effect } = configs

    return (
        <div>
            <img
                onClick={(e) => {console.log(e.target)}}
                className="config-item"
                src={`/images/${brand.replace(' ', '-').toLowerCase()}/${effect.replace(' / ', '-').toLowerCase()}/${model.replace(' ', '-').toLowerCase()}.jpeg`}
            />
            <div className="text-container">
                { model } 
            </div>
            <div className="text-container">
                { effect } 
            </div>
        </div>
    )
}

export default ConfigItem;