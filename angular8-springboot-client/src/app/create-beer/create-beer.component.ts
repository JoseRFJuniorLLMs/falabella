import { BeerService } from '../beer.service';
import { Beer } from '../beer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-beer',
  templateUrl: './create-beer.component.html',
  styleUrls: ['./create-beer.component.css']
})
export class CreateBeerComponent implements OnInit {

  beer: Beer = new Beer();
  submitted = false;

  constructor(private beerService: BeerService,
    private router: Router) { }

  ngOnInit() {
  }

  newBeer(): void {
    this.submitted = false;
    this.beer = new Beer();
  }

  save() {
    this.beerService.createBeer(this.beer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.beer = new Beer();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/beers']);
  }
}
