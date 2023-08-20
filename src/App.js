// import logo from './logo.svg';
// import './App.css';

import React, {useEffect, useState} from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import APIRequest from "./APIRequest";

function App() {
  const API_URL = "http://localhost:3500/items"

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setItems(JSON.parse(localStorage.getItem("to_do_lists")));
    const getData = async() => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("Data not received!");
        const itemsData = await response.json();
        setItems(itemsData);
        setFetchError(null);
      }catch(err){
        console.log(err);
        setFetchError(err.message);
      }finally{
        setIsLoading(false);
      }
    }
    //Manually created the loading time
    setTimeout(()=> {
      (async() => await getData())()
    }, 3000);

    
  }, [])

  async function handleDelete(id){
      setItems((prevItems) => {
          return (
              prevItems.filter((item) => {
                  return item.id !== id;
              })
          )
      })
      // localStorage.setItem("to_do_lists", JSON.stringify(items));
      const deleteObject = {
        method : "DELETE"
      }
      const url = API_URL+"/"+id;
      const response = await APIRequest(url, deleteObject);
      if(response) setFetchError(response)
  }

  async function handleCheck(id){
      const newItems =items.map((item) => {
          return item.id === id ? {...item, checked: ! item.checked} : item;
          // if(item.id === id){
          //     item = {...item, checked : !item.checked};
          // }
          // return item;
      })
      setItems(newItems);
      console.log(items);
      // localStorage.setItem("to_do_lists", JSON.stringify(items));

      const updateItem = newItems.filter(item => item.id === id);
      console.log(updateItem)

      const updateObject= {
        method : "PATCH",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({checked: updateItem[0].checked})
      }

      const url = API_URL + "/" + id;
      console.log(url)

      const response = await APIRequest(url, updateObject);
      if(response) setFetchError(response)
      
  }

  async function handleSubmit(e){
    e.preventDefault();
    const createNewItem = {
      id : items.length === 0 ? 1 : items[items.length - 1].id + 1,
      checked : false,
      task : newItem
    };
    setItems((prevItems) => {
      return [...prevItems, createNewItem]
    })

    const createObject = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(createNewItem)
    }

    const createReq = await APIRequest(API_URL, createObject);
    if(createReq){
      setFetchError(createReq);
    }
    // localStorage.setItem("to_do_lists", JSON.stringify(items));
    setNewItem("");
  }

  function handleSearch(value){
    setSearchItem(value);
  }

  return (
    <div className = "App">
      {/* <Challenge1 /> */}
      <Header  title="To Do List"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        searchItem = {searchItem}
        setSearchItem = {handleSearch}
      />
      {isLoading && <p style={{height: "100vh", display : "grid", alignItems: "center"}}>Loading Items...</p>}
      {fetchError && <p style={{height: "100vh", display : "grid", alignItems: "center"}}>{`Error : ${fetchError}`}</p>}
      {!isLoading && !fetchError &&
        <Content 
          items = {items.filter((item) => item.task.toLowerCase().includes(searchItem.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />
      }
      <Footer length={items.length}/>
    </div>
  );

}

export default App;
