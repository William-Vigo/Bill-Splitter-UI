import React, { useState } from "react"

function Purchases() {
    const [items, setItems] = useState([{name:"", price:0}])

    function handleChange(index, event) {
        const itemProps = [...items]

        if (event.target.name === "name") {
            console.log("index", index)
            itemProps[index] = {
                ...itemProps[index],
                name: event.target.value
            }
        }
        else if (event.target.name === "price"){
            itemProps[index] = {
                ...itemProps[index],
                price: event.target.value
            }
        }
        setItems(itemProps)
    }

    function handleAdd() {
        const newItems = [...items]
        newItems.push({name:"", price:0})
        setItems(newItems)
    }

    function handleRemove(index) {
        if (items.length - 1 === 0){
            return
        }
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems)
    }

    return (
        <div>
            {
                items.map((item, idx) => {
                    const length = items.length - 1
                    return (
                        <div>
                            <input placeholder="Burger" type="text" name="name" value={item.name} onChange={e => handleChange(idx, e)} />
                            <input placeholder="12.75" type="text" name="price" value={item.price} onChange={e => handleChange(idx, e)} />
                            <button onClick={() => handleRemove(idx)}>x</button>
                            { idx === length && <button onClick={() => handleAdd()}>+</button> }
                        </div>
                    )
                })
            }
       </div>
    )
}

export default Purchases