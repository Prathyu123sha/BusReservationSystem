package com.cg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.dto.BusDto;
import com.cg.entity.Bus;
import com.cg.service.BusService;


@RestController
@RequestMapping("/bus")
public class BusController {
	@Autowired
	private BusService iBusService;

	@PostMapping("/")
	public Bus addBus(@RequestBody BusDto busDto) {
		return iBusService.addBus(busDto);
	}
	
	@PutMapping("/{busId}/{name}")
	public BusDto updateBus(@PathVariable ("busId")int busId, @PathVariable("name") String name) {
		return iBusService.updateBus(busId,name);
	}
	
	@DeleteMapping("/{busId}")
	public Bus deletBus(@PathVariable ("busId") int busId) {
                return iBusService.deleteBus(busId);
	}
	@GetMapping("/viewAllBuses")
	public List<BusDto> viewAllBus(){
		return iBusService.viewAllBuses();
	}
    
	@GetMapping("/viewBus/{busId}")
	public BusDto viewBus(@PathVariable ("busId") int busId) {
	return iBusService.viewBus(busId);
    }

	@GetMapping("/viewBusByType/{busType}")
    public List<BusDto> viewBusByType(@PathVariable("busType") String busType){
	  return iBusService.viewBusByType(busType);
  }

}
