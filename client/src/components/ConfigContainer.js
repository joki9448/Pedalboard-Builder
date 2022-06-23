import ConfigItem from './ConfigItem';

function ConfigContainer({ configs, isTextVisible }) {
    // console.log('configs post map', configs.chain)
    let savedConfigs = configs.chain
    console.log('savedconfigs', savedConfigs)
    // const { brand, model, effect } = configs

    return (
        <div  className="config-items-container">
            {savedConfigs.map((e) => {
                console.log('savedconfigs', e)
                return <ConfigItem key={e.id} configs={e} isTextVisible={isTextVisible}/>
            })}
        </div>
    )
}

export default ConfigContainer;