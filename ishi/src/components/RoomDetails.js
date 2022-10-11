import React, {useEffect, useState} from "react";
import "../index.css"
import {useParams} from "react-router-dom"
 
function RoomDetails(){
  const roomDB = "https://ishi-react.herokuapp.com/rooms"
  const [room, setRoom]=useState({})
  const [input, setInput]=useState('')
  let params = useParams()
  console.log(params)
  useEffect(()=> {
   fetch(`${roomDB}/${params.roomId}`)
  .then((r)=>r.json())
  .then((data)=>setRoom(data))}, [])
  
  console.log(room)
  function handleChange(e){
    setInput({'paymenttoken':e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    fetch(`${roomDB}/${params.roomId}`,{
     method :'PATCH',
     headers : {
      'Content-Type':'application/JSON'
     },
     body : JSON.stringify(input) 
    })
    alert(`Congratulations you have successfully booked ${room.description}`)
  }
 return(
    <div id="selected-room">
    <img src={room.image} alt="selected room"/>
    <p id="desc">{room.description}</p>
    <form onSubmit={handleSubmit}>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Payment Token</label>
    <input type="text" class="form-control" id="InputPassword1" onChange={handleChange}/>
    </div>
     <button type="submit" class="btn btn-primary">Submit</button>
    </form>    
    </div>
  )
 }

 export default RoomDetails
