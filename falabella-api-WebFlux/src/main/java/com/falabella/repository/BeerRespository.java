package com.falabella.repository;

import com.falabella.document.Beer;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface BeerRespository extends ReactiveMongoRepository<Beer, String>{
    @Override
    Flux<Beer> findAll(Sort sort);
    Flux<Beer> findByName(String name);
    Flux<Beer> findByStar(String star);
    Flux<Beer> findByProbar(String probar);
    Flux<Beer> findByBrewery(String brewery);
    Flux<Beer> findByCoutry(String coutry);
}
