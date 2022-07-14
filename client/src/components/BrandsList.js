import BrandItem from './BrandItem';

function BrandsList({ brandsList, setSelectedBrand, setIsBrandSelected }) {
    return (
        <div className="brands-container">
            {
                brandsList.map((b, i) => {
                   return <BrandItem 
                        key={i} brandItems={b} 
                        setSelectedBrand={setSelectedBrand} 
                        setIsBrandSelected={setIsBrandSelected}
                    />
                })
            }
        </div>
    )
}

export default BrandsList;