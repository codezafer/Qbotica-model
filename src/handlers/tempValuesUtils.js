function setTempValues(){
    return localStroage.setItem("tempValues",JSON.stringify(values))
 }
 function getTempValues(){
     return JSON.parse(localStorage.getItem("tempValues"))
 }

function clearTempValues(){
    return localStorage.removeItem("tempValues")
}

 export {setTempValues,getTempValues}