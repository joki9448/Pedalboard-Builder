import BrandItem from './BrandItem';

function BrandsList({ brandsList }) {
    return (
        <div className="brands-container">
            {
                brandsList.map((b, i) => {
                   return <BrandItem key={i} brandItems={b}/>
                })
            }
        </div>
    )
}

export default BrandsList;