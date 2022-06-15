import {useState} from 'react'

function SelectedPedals({ p }){
    const { id, brand, model, effect } = p
    const [isDragging, setIsDragging] = useState(false)
    const handleDrag = (e) => {
      setIsDragging(true)
      e.dataTransfer.setData("id", id);
      e.dataTransfer.setData("model", model);
    }


    return (
        <div>
            <img
                className="selectedpedal"
                onDragStart={handleDrag} 
                draggable="true"
                src={`/images/${brand.replace(' ', '-').toLowerCase()}/${effect.replace(' / ', '-').toLowerCase()}/${model.replace(' ', '-').toLowerCase()}.jpeg`}
            />
        </div>
    )
}

export default SelectedPedals;