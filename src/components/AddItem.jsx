import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {

  const inputRef = useRef();

  return (
    <form class="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input onChange={(e) => setNewItem(e.target.value)} ref = {inputRef} type="text" required placeholder="Enter the Item" aria-label="addItem" autoFocus value = {newItem}></input>
        <button type="submit" onClick={() => inputRef.current.focus()}><FaPlus /></button>
    </form>
  )
}

export default AddItem