import React from "react";
import ListItems from "./ListItems";

const Content = ({items, handleCheck, handleDelete}) => {

    return (
        <main>
            <ListItems 
                items = {items}
                handleCheck = {handleCheck}
                handleDelete={handleDelete}
            />
        </main>
    );

};

// function Test(){
//     return <h1>Hello!!!</h1>
// }

export default Content;
// export {Test};