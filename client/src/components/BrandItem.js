function BrandItem({ brandItems, setSelectedBrand }) {
    return (
        <ul className="brands-item" onClick={(e) => {console.log('brand filter: ', e.target.textContent); setSelectedBrand(e.target.textContent)}}>
            {brandItems}
        </ul>
    )
}

export default BrandItem;