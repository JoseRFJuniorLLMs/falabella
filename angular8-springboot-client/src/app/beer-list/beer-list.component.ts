import { BeerDetailsComponent } from '../beer-details/beer-details.component';
import { Observable } from "rxjs";
import { BeerService } from "../beer.service";
import { Beer } from "../beer";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-beer-list",
  templateUrl: "./beer-list.component.html",
  styleUrls: ["./beer-list.component.css"]
})
export class BeerListComponent implements OnInit {
  beers: Observable<Beer[]>;

  constructor(private beerService: BeerService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.beers = this.beerService.getBeersList();
  }

  deleteBeer(id: number) {
    this.beerService.deleteBeer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  beerDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateBeer(id: number){
    this.router.navigate(['update', id]);
  }
}
