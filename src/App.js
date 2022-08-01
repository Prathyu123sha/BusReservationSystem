import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import BusList from './components/BusList';
import { useState,useEffect } from 'react';
import apiClient from './http-common';
import {BrowserRouter,Routes,Route,Link,useNavigate} from 'react-router-dom'
import AddBusForm from './components/AddBusForm';
import EditBusForm from './components/EditBusForm';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  
const [buses,setBuses]=useState([]);

    //when App component gets loaded , a call to api will render the products list as a response
    //which we are setting to the products
    useEffect(()=>{apiClient.get("/viewAll").then((response)=>{
      setBuses(response.data);
    })},[])

    
const [editing,setEditing]=useState(false);

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
const [currentBus,setCurrentBus] 
     =useState(initialFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
async function addBus(bus){
  try{
  const response=await apiClient.post('/',bus);
    setBuses([...buses,response.data]);
    console.log(buses);
    
  }catch(err){
    console.log(err)
  }
  
}



async function deleteBus(busId){
  await apiClient.delete(`/${busId}`);
    setBuses(buses.filter((bus)=>bus.busId !== busId));
  }
  
  const editBus=(bus)=>{

    setEditing(true);
      setCurrentBus
      ({busId:bus.busId,arrivalTime:bus.arrivalTime,
        availableSeats:bus.availableSeats,busName:bus.busName,busType:bus.busType,departureTime:bus.departureTime,driverName:bus.driverName,routeFrom:bus.routeFrom,routeTo:bus.routeTo,seats:bus.seats})
     
  }
  
  const updateBus = (busId,updatedBus)=>{
  
    setEditing(false);
    apiClient.put(`/${busId}`,updatedBus).then((response)=>
    {
  
      console.log('bus updated');
      setBuses(buses.map((bus)=>
    (bus.busId === busId ? updatedBus : bus)));
    })
    
  }
  
  
  
  
  return (
    <div>
    <div className='container'>
    <h1 style={{ color: "blue" }}>bus Form</h1>
    <div className='flex-row'>
      <div className='flex-large'>
        {editing ? (
        <div>
          <h2>Edit Bus Form </h2>
          <EditBusForm
           setEditing={setEditing}
           currentBus={currentBus}
           updateBus={updateBus}
           />
           </div>):(
    <BrowserRouter>
    
    <nav className="navbar navbar-expand navbar-dark bg-info">
        <a href="/buses" className="navbar-brand">
          React App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/buses"} className="nav-link">
              Bus
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addBus"} className="nav-link">
              Add Bus
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
        <Route path='/' element={<BusList 
    busData={buses} 
         editBus={editBus}
         deleteBus={deleteBus} />} ></Route>
          <Route exact path="addBus" element={<AddBusForm addBus={addBus}/>} />
         
         <Route path='/buses' element={<BusList 
    busData={buses} 
         editBus={editBus}
         deleteBus={deleteBus} />}>

         </Route>
         <Route path="/buses/:busId" element={<EditBusForm /> }></Route>
        </Routes>
      </div>
      
    </BrowserRouter>

    )}
    </div>
    </div>
    </div>
    </div>
     
        
)}

export default App;

