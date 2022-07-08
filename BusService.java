package com.cg.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.dto.BusDto;
import com.cg.entity.Bus;
import com.cg.repository.IBusRepository;


@Service

public class BusService {
	
	@Autowired
	private IBusRepository iBusRepository;
	
	public Bus addBus(BusDto busDto) {
		Bus bus=new Bus();
		BeanUtils.copyProperties(busDto, bus);
		   
		iBusRepository.save(bus);
		return bus;
	}
	
	
	public BusDto updateBus( int busId,String busName) {

		Bus bus=new Bus();
		BusDto busDto=new BusDto();
		BeanUtils.copyProperties(iBusRepository.findById(busId).get(), busDto);
		
		busDto.setBusType(busName);
		
		BeanUtils.copyProperties(busDto, bus);
		iBusRepository.save(bus);
		iBusRepository.flush();
		
		return busDto;
	
		
		  
	}
	


	


	public Bus deleteBus(int busId) {
		Bus bus=new Bus();
		BusDto busDto=new BusDto();
		bus = iBusRepository.findById(busId).get();
		BeanUtils.copyProperties(busId, bus);
		
		iBusRepository.deleteById(busId);
		return bus;
	}
	
	
	public BusDto viewBus(int busId) {
		BusDto busDto=new BusDto();
		Bus bus=new Bus();
		 bus = iBusRepository.findById(busId).get();
		BeanUtils.copyProperties(bus, busDto);
		return busDto;
	}
	
	public List<BusDto> viewBusByType(String busType){
		List<BusDto> busDtoList=new ArrayList<>();
		BusDto busDto=new BusDto();
		List<Bus> busList=iBusRepository.findByBusType(busType);
		for(Bus bus:busList) {
            BeanUtils.copyProperties(bus, busDto);
            busDtoList.add(busDto);
        }
		
	   
		return busDtoList;
	}
	
	public List<BusDto> viewAllBuses(){
		List<BusDto> busDtoList= new ArrayList<>();
		List<Bus> busList=iBusRepository.findAll();
		BusDto busDto =new BusDto();
		for(Bus bus:busList) {
			BeanUtils.copyProperties(bus,busDto);
			busDtoList.add(busDto);
			
			
		}
		
		
		return busDtoList;
	}
}

