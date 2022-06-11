import BrandItem from './BrandItem';

function BrandsList({ brandsList }) {
    return (
        <div>
            {
                brandsList.map((b, i) => {
                    <BrandItem key={i} brandItems={b}/>
                })
            }
        </div>
    )
}

export default BrandsList;