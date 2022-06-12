function BrandItem({ brandItems, setSelectedBrand }) {
    return (
        <div className="brand-item" onClick={(e) => {setSelectedBrand(e.target.textContent)}}>
            {brandItems}
        </div>
    )
}

export default BrandItem;