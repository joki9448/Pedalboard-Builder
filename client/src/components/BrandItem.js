function BrandItem({ brandItems, setSelectedBrand }) {
    return (
        <div className="brands-item" onClick={(e) => {console.log(e.target.textContent); setSelectedBrand(e.target.textContent)}}>
            {brandItems}
        </div>
    )
}

export default BrandItem;