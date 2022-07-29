import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { Link, Bus } from 'react-router-dom';

import {
    retrieveBuses,

}from '../actions/buses'
export default function BusList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentBus,setCurrentBus]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const buses = useSelector((state)=>state.buses);
     

    useEffect(()=>{
        dispatch(retrieveBuses());
      },[]);

    
    const refreshData=()=>{
        setCurrentBus(null);
        setCurrentIndex(-1);
    }
 

    const setActivebus = (bus,index)=>{
        setCurrentBus(bus);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 


return(
<table>
    <thead>
        <tr>
            <th>busId</th>
            <th>arrivalTime</th>
            <th>availableSeats</th>
            <th>busName</th>
            <th>busType</th>
            <th>departureTime</th>
            <th>driverName</th>
            <th>routeFrom</th>
            <th>routeTo</th>
            <th>seats</th>

        </tr>
    </thead>
    <tbody>
{/*  {props?.productData?.length >0 ?(
        props.productData.map((product)=>(
   */}

  {props.bus?.length > 0 ? (
   props.bus.map((bus)=>(
    <tr key={bus.busId}>
        <td>{bus.busId}</td>
        <td>{bus.arrivalTime}</td>
        <td>{bus.availableSeats}</td>
        <td>{bus.busName}</td>
        <td>{bus.busType}</td>
        <td>{bus.departureTime}</td>
        <td>{bus.driverName}</td>
        <td>{bus.routeFrom}</td>
        <td>{bus.routeTo}</td>
        <td>{bus.seats}</td>

        <td><button 
         onClick={()=>{props.editBus(bus)}}
        className="button muted-button">Edit</button></td>
        <td><button 
        onClick={()=>props.deleteBus(bus.busId)}
        className="button muted-button">Delete</button></td>
        
     </tr>))):(
        <tr>
            <td colSpan={6}>No buses</td>
        </tr>
     )}

    </tbody>
</table>




)




}