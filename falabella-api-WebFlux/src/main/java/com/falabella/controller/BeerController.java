package com.falabella.controller;

import com.falabella.document.Beer;
import com.falabella.services.BeerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

import java.time.Duration;

@CrossOrigin(origins = "*")
@RestController
public class BeerController {
	
	@Autowired
	BeerService beerService;

	//Lista todas las cervezas
	// Lista todas las cervezas que se encuentran en la base de datos
	@GetMapping(value="/beers/v1/todos")
	public Flux<Beer> getBeer(){
		return beerService.findAll();
	}

	///Lista el detalle de la marca de cervezas
	//Obtiene el precio de una caja de cerveza por su Id
	@GetMapping(value="/beers/v1/id/{id}")
	public Mono<Beer> getBeerId(@PathVariable String id){
		return beerService.findById(id);
	}

	///Lista el detalle de la marca de cervezas por name
	@GetMapping(value="/beers/v1/name/{name}")
	public Flux<Beer> getBeerName(@PathVariable String name){
		return beerService.findByName(name);
	}

	///Lista el detalle de la marca de cervezas por brewery
	@GetMapping(value="/beers/v1/brewery/{brewery}")
	public Flux<Beer> getBeerBrewery(@PathVariable String brewery){
		return beerService.findByBrewery(brewery);
	}

	///Lista el detalle de la marca de cervezas por probar
	@GetMapping(value="/beers/v1/probar/{probar}")
	public Flux<Beer> getBeerProbar(@PathVariable String probar){
		return beerService.findByProbar(probar);
	}

	///Lista el detalle de la marca de cervezas por star
	@GetMapping(value="/beers/v1/star/{star}")
	public Flux<Beer> getBeerStar(@PathVariable String star){
		return beerService.findByStar(star);
	}

	///Lista el detalle de la marca de cervezas por coutry
	@GetMapping(value="/beers/v1/coutry/{coutry}")
	public Flux<Beer> getBeerCoutry(@PathVariable String coutry){
		return beerService.findByCoutry(coutry);
	}

	///Lista el precio de una caja de cervezas de una marca
	//Obtiene el precio de una caja de cerveza por su Id
	@GetMapping(value="/beers/v1/{id}/boxprice")
	public Mono<Beer> getBeerIdboxprice(@PathVariable String id){
		return beerService.findById(id);
	}

	//Ingresa una nueva cerveza
	@PostMapping(value="/beers/v1/nuevo")
	public Mono<Beer> save(@RequestBody Beer beer){
		return beerService.save(beer);
	}

	//Lista el detalle de la marca de cervezas ...events
	@GetMapping(value="/beers/events", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
	public Flux<Tuple2<Long, Beer>> getBeerByEvents(){
	    Flux<Long> interval = Flux.interval(Duration.ofSeconds(10));
        Flux<Beer> events = beerService.findAll();
        System.out.print("Passou aqui events");
        return Flux.zip(interval, events);
	}
}
