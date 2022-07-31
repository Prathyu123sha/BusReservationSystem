import React,{useState} from'react'
import { useDispatch } from 'react-redux';
import { addBus } from '../actions/buses'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import App from '../App';

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



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setBus({...bus,[name]:value});
}
 





const submitHandler=(event)=>{event.preventDefault();
if(   !bus.arrivalTime || !bus.availableSeats || !bus.busName || !bus.busType ||
    !bus.departureTime || !bus.driverName || !bus.routeFrom || !bus.routeTo || !bus.seats)
   return;
 console.log(bus+'from addbusform')
props.addBus(bus);
//dispatch(addBus(bus));
setBus(initialFormState);

}

return (
   <Form onSubmit={submitHandler} >
     <Form.Group className="mb-3" controlId="formBasicbusId">
       <Form.Label>bus Id</Form.Label>
       <Form.Control type="number" placeholder="Reservation Id"
        name='busId'
        value={bus.busId}
       onChange={handleInputChange} />
       
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicarrivalTime">
       <Form.Label>arrivalTime</Form.Label>
       <Form.Control type="time" placeholder="arrivalTime" 
        name='arrivalTime'
        value={bus.arrivalTime}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formbasicavaiableSeats">
       <Form.Label>avaiableSeats</Form.Label>
       <Form.Control type="number" placeholder="avaialableSeats"
       name='availableSeats'
       value={bus.availableSeats}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicbusName">
       <Form.Label>busName</Form.Label>
       <Form.Control type="text" placeholder="busName" 
        name='busName'
        value={bus.busName}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicbusType" >
       <Form.Label>busType</Form.Label>
       
       
         <Form.Select aria-label="Default select example" name='busType' onChange={handleInputChange} placeholder="Choose the bus type" >
         <option >Open this select menu</option>
         <option value="AcCoach">Ac-Coach</option>
         <option value="NonAc">NonAc-Coach</option>
         <option value="General">General</option>
         
       </Form.Select>
     
       
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicrouteFrom" >
       <Form.Label>routeFrom</Form.Label>
       
       
         <Form.Select aria-label="Default select example" name='routeFrom' onChange={handleInputChange} placeholder="Choose the Starting point" >
         <option >Open this select menu</option>
         <option value="Karimnagar">Karimnagar</option>
         <option value="Chennai">Chennai</option>
         <option value="Hyderbad">Hyderbad</option>
         </Form.Select>
         </Form.Group>
     
     <Form.Group className="mb-3" controlId="formBasicdepartureTime">
       <Form.Label>departureTime</Form.Label>
       <Form.Control type="time" placeholder="departureTime" 
        name='departureTime'
        value={bus.departureTime}
       onChange={handleInputChange} />
     </Form.Group>

     
     <Form.Group className="mb-3" controlId="formBasicdriverName">
       <Form.Label>driverName</Form.Label>
       <Form.Control type="text" placeholder="driverName" 
        name='driverName'
        value={bus.driverName}
       onChange={handleInputChange} />
     </Form.Group>
       
       
       
        
         
       
     
       
     
     

     

     <Form.Group className="mb-3" controlId="formBasicrouteTo" >
       <Form.Label>routeTo</Form.Label>
       
       
         <Form.Select aria-label="Default select example" name='routeTo' onChange={handleInputChange} placeholder="Choose the Ending point" >
         <option >Open this select menu</option>
         <option value="Mumbai">Mumbai</option>
         <option value="Goa">Goa</option>
         <option value="Pune">Pune</option>
         </Form.Select>
         </Form.Group>

     <Form.Group className="mb-3" controlId="formseats">
       <Form.Label>seats</Form.Label>
       <Form.Control type="number" placeholder="seats" 
         name='seats'
         value={bus.seats}
       onChange={handleInputChange} />
     </Form.Group>
     
     <Button variant="primary" type="submit">
       Submit
     </Button>
   </Form>
 );
}