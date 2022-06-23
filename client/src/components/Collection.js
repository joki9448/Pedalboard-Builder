import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ConfigContainer from './ConfigContainer';

function Collection() {

    const [configs, setConfigs] = useState([])
    const [isTextVisible, setIsTextVisible] = useState(false)

    const handleMouseEnter = () => {
        setIsTextVisible(true)
    }
    const handleMouseLeave = () => {
        setIsTextVisible(false)
    }


    const request = async () => {
        try {
            let req = await fetch('/configs')
            let res = await req.json()
            console.log('res: ', res)
            // let chain = res[1].chain
            // console.log('chain ', chain)
            setConfigs(res)
        }   catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        request()
    }, [])

    return (
        <div>
            <Link to="/">
                <button className="collect-home-btn">HOME</button>
            </Link>
            <h1 className="collection-header">Your Collection</h1>
            <div className="collection-head-layer"></div>
            <div className="config-container">
                {configs.map((e) => {
                    console.log('configs map', e)
                    return <ConfigContainer 
                    key={e.id} 
                    configs={e}
                    isTextVisible={isTextVisible}
                    setIsTextVisible={setIsTextVisible}
                    />
                })}
            </div>
        </div>
    )
}

export default Collection;