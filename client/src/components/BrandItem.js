function BrandItem({ brandItems, setSelectedBrand, setIsBrandSelected }) {
    return (
        <ul className="brands-item" onClick={(e) => 
            {console.log('brand filter: ', e.target.textContent); 
            setSelectedBrand(e.target.textContent);
            setIsBrandSelected(true);
            }}>

            {brandItems}
        </ul>
    )
}

export default BrandItem;