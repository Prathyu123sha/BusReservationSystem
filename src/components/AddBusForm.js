import React,{useState} from'react'
import { useDispatch } from 'react-redux/es/exports';
import { addBus } from '../actions/buses';

export default function AddBusForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
   busId:0,
   arrivalTime:'',
   availableSeats:0,
   busName:'',
   busType:'',
   departureTime:'',
   driverName:'',
   routeFrom:'',
   routeTo:'',
   seats:''


}
 
const [bus,setBus]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setBus({...bus,[name]:value});
}
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
if(   !bus.arrivalTime || !bus.availableSeats || !bus.busName || !bus.busType ||
    !bus.departureTime || !bus.driverName || !bus.routeFrom || !bus.routeTo || !bus.seats)
   return;
 console.log(bus+'from addbusform')
props.addBus(bus);
//dispatch(addBus(bus));
setBus(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

<label>busId</label>
<input 
type='number'
name='busId'
value={bus.busId}
onChange={handleInputChange}/><br></br>

<label>arrivalTime</label>
<input 
type='time'
name='arrivalTime'
value={bus.arrivalTime}
onChange={handleInputChange}/><br></br>

<label>availableSeats</label>
<input 
type='number'
name='availableSeats'
value={bus.availableSeats}
onChange={handleInputChange}/><br></br>

<label>busName</label>
<input 
type='text'
name='busName'
value={bus.busName}
onChange={handleInputChange}/><br></br>

<label>busType</label>
<input 
type='text'
name='busType'
value={bus.busType}
onChange={handleInputChange}/><br></br>

<label>departureTime</label>
<input 
type='time'
name='departureTime'
value={bus.departureTime}
onChange={handleInputChange}/><br></br>

<label>driverName</label>
<input 
type='text'
name='driverName'
value={bus.driverName}
onChange={handleInputChange}/><br></br>

<label>routeFrom</label>
<input 
type='text'
name='routeFrom'
value={bus.routeFrom}
onChange={handleInputChange}/><br></br>

<label>routeTo</label>
<input 
type='text'
name='routeTo'
value={bus.routeTo}
onChange={handleInputChange}/><br></br>

<label>seats</label>
<input 
type='number'
name='seats'
value={bus.seats}
onChange={handleInputChange}/>

      

<button>Add New bus</button>

</form>


</>
)


}