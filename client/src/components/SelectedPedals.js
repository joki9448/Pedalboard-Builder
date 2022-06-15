import {useState} from 'react'


function SelectedPedals({ p }){
    const { id, brand, model, effect } = p
    const [isDragging, setIsDragging] = useState(false)
    const handleDrag = (e) => {
      setIsDragging(true)
      e.dataTransfer.setData("id", id);
      e.dataTransfer.setData("model", model);
    }


    // const handleDragOver = (e) => {
    //     e.preventDefault()
    //     let model = e.dataTransfer.getData("model")
    //     let id = e.dataTransfer.getData("id")
    //     console.log('Dragged item V', model, id)
    //     let foundPedal = p.all.find((ped) => ped.id == id)
        
    //     setPedals((prevState) => {
    //         // console.log('dropped pedal objs', prevState.dropped)

    //         let droppedIds = []
    //         let stopDuplicates = prevState.dropped.filter((p) => {
    //             droppedIds.push(p.id)
    //             return droppedIds
    //             // console.log('foundPedal obj in stopduplicates', foundPedal.id)
    //         })
    //         console.log('dropped ids', droppedIds)
    //         if (!droppedIds.includes(foundPedal.id))
    //         return  {...prevState, ['dropped']: [...prevState.dropped, foundPedal]}
    //         // else
    //         //     return null
    // })

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