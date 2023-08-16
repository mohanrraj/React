import React, { useState } from "react";
import {FaTrashAlt} from "react-icons/fa";

const Content = () => {

    const [items, setItmes] = useState([
        {
            id : 1,
            checked : false,
            task : "Complete React course"
        },
        {
            id : 2,
            checked : true,
            task : "Don't waste time"
        },
        {
            id : 3,
            checked : false,
            task : "Don't spend too much time"
        }
    ]);

    function handleDelete(id){
        setItmes((prevItems) => {
            return (
                prevItems.filter((item) => {
                    return item.id !== id;
                })
            )
        })
    }

    function handleCheck(id){
        const newItems = items.map((item) => {
            return item.id === id ? {...item, checked: ! item.checked} : item;
            // if(item.id === id){
            //     item = {...item, checked : !item.checked};
            // }
            // return item;
        })
        setItmes(newItems);
    }

    return (
        <main>
            <ul>
                {items.map((item) => {
                    return (
                        <li className="item" key = {item.id}>
                            <input type="checkbox" onChange={() => {handleCheck(item.id)}} checked={item.checked} />
                            <label style={(item.checked) ? {textDecoration : "line-through"} : null} onDoubleClick={() => {handleCheck(item.id)}}>{item.task}</label>
                            <FaTrashAlt 
                                role="button"
                                onClick={() => {handleDelete(item.id)}}
                                tabIndex={0}
                            />
                        </li>
                    )
                })}
                
            </ul>
        </main>
    );

};

// function Test(){
//     return <h1>Hello!!!</h1>
// }

export default Content;
// export {Test};