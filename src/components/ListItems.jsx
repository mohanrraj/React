import React from 'react';
import LineItem from './LineItem';

const ListItems = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.length === 0 ? "Your list is Empty!" : null}
        {items.map((item) => {
            return (
                <LineItem 
                    key={item.id}
                    item = {item}
                    handleCheck = {handleCheck}
                    handleDelete={handleDelete}
                />
            )
        })}
    </ul>
  )
}

export default ListItems