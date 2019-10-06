package com.falabella.services;

import com.falabella.document.Beer;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface BeerService {
	
	Flux<Beer> findAll();
	Mono<Beer> findById(String id);
	Mono<Beer> save(Beer beer);
	Flux<Beer> findByName(String name);
	Flux<Beer> findByBrewery(String brewery);
	Flux<Beer> findByProbar(String probar);
	Flux<Beer> findByStar(String star);
	Flux<Beer> findByCoutry(String coutry);
}
