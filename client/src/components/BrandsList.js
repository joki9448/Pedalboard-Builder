import BrandItem from './BrandItem';

function BrandsList({ brandsList, setSelectedBrand }) {
    return (
        <div className="brands-container">
            {
                brandsList.map((b, i) => {
                   return <BrandItem key={i} brandItems={b} setSelectedBrand={setSelectedBrand}/>
                })
            }
        </div>
    )
}

export default BrandsList;