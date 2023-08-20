
const APIRequest = async (url = "", optionsObject = {}, errMsg = null) => {
  try{
    const response = await fetch(url, optionsObject);
    if(!response.ok) throw Error("Please reload the server")
  }catch(err){
    errMsg = err.message;
  }finally{
    return errMsg;
  }
}

export default APIRequest