// import { useDrag } from 'react-dnd';
import {useState} from 'react'


function PedalItem({ pedals }) {
    const { id, brand, effect, model } = pedals
    const [isDragging, setIsDragging] = useState(false)
    const handleDrag = (e) => {
      setIsDragging(true)
      e.dataTransfer.setData("id", id);
      e.dataTransfer.setData("model", model);
    }
    // const [{isDragging}, drag] = useDrag(() => ({
    //     type: "image",
    //     item: pedals,
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging(),
    //     })
    // }))
    return (
        <div className="pedals-item" onDragStart={handleDrag} draggable="true">
            <img
                style={{border: isDragging ? "5px solid pink" : "0xp"}} 
                src={`/images/${brand.replace(' ', '-').toLowerCase()}/${effect.replace(' / ', '-').toLowerCase()}/${model.replace(' ', '-').toLowerCase()}.jpeg`}
            />
        </div>
    )
}

export default PedalItem;