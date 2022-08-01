import React , {useContext, useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function EditBusForm(props){
     const [bus,setBus] =useState(props.currentBus)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setBus({...bus,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateBus(bus.busId,bus);
    }


   

    return (
      <Card style={{backgroundColor: "#03a9f4" , width: '20rem' }}>
          <ListGroup variant="flush">
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
           <Form.Control type="time" placeholder="arrivalTime" required
            name='arrivalTime'
            value={bus.arrivalTime}
           onChange={handleInputChange} />
         </Form.Group>
    
         <Form.Group className="mb-3" controlId="formbasicavaiableSeats">
           <Form.Label>avaiableSeats</Form.Label>
           <Form.Control type="number" placeholder="avaialableSeats" required
           name='availableSeats'
           value={bus.availableSeats}
           onChange={handleInputChange} />
         </Form.Group>
    
         <Form.Group className="mb-3" controlId="formBasicbusName">
           <Form.Label>busName</Form.Label>
           <Form.Control type="text" placeholder="busName"  required
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
           <Form.Control type="time" placeholder="departureTime" required
            name='departureTime'
            value={bus.departureTime}
           onChange={handleInputChange} />
         </Form.Group>
    
         
         <Form.Group className="mb-3" controlId="formBasicdriverName">
           <Form.Label>driverName</Form.Label>
           <Form.Control type="text" placeholder="driverName"  required
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
           <Form.Control type="number" placeholder="seats" required
             name='seats'
             value={bus.seats}
           onChange={handleInputChange} />
         </Form.Group>
         
         <Button variant="primary" type="Update Bus">
           updateBus
         </Button>
         <Button variant="primary" type="Cancel">
           Cancel
         </Button>
         
       </Form>
       </ListGroup>
        </Card>
       
       
     );
    }