function setTempEmailId(emailId){
    return localStorage.setItem("tempEmailId",JSON.stringify(emailId))
}
function clearTempEmailId(){
    return localStorage.removeItem("tempEmailId")
}
function getTempEmailId(){
    return JSON.parse(localStorage.getItem("tempEmailId"))
}

export {setTempEmailId,clearTempEmailId,getTempEmailId}