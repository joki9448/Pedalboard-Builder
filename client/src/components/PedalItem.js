import { useDrag } from 'react-dnd';

function PedalItem({ pedals, id }) {
    const { brand, effect, model } = pedals
    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))
    return (
        <div className="pedals-item">
            <img ref={drag} 
                style={{border: isDragging ? "5px solid pink" : "0xp"}} 
                src={`/images/${brand.replace(' ', '-').toLowerCase()}/${effect.replace(' / ', '-').toLowerCase()}/${model.replace(' ', '-').toLowerCase()}.jpeg`}
            />
        </div>
    )
}

export default PedalItem;