function BrandItem({ brandItems, setSelectedBrand }) {
    return (
        <div className="brand-item" onClick={(e) => {console.log(e.target.textContent); setSelectedBrand(e.target.textContent)}}>
            {brandItems}
        </div>
    )
}

export default BrandItem;