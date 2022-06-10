import Brands from './Brands'

function Menu({ brands, setBrands }) {

    const handleBrandClick = async () => {
        let req = await fetch('/pedals')
        let res = await req.json()
        // console.log(res)
        setBrands(res)
    }
    return (
        <div>
            <h1>Menu</h1>
            <button>Select Pedalboard</button>
            <button onClick={handleBrandClick}>Select Brand</button>
                {
                    brands.map((e) => {
                        return <Brands key={e.id} brands={e}/>
                    })
                }
            <button>Select Type</button>
            <button>Select Model</button>
        </div>
    )
}

export default Menu;