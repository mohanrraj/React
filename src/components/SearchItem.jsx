import React from 'react'

const SearchItem = ({searchItem, setSearchItem}) => {
  return (
    <div class="addForm">
        <input type= "text" onChange={(e) => setSearchItem(e.target.value)} value ={searchItem} placeholder='Search Item'></input>
    </div>
  )
}

export default SearchItem