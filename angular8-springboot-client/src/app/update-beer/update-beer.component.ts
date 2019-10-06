import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-update-beer',
  templateUrl: './update-beer.component.html',
  styleUrls: ['./update-beer.component.css']
})
export class UpdateBeerComponent implements OnInit {

  id: number;
  beer: Beer;

  constructor(private route: ActivatedRoute,private router: Router,
    private beerService: BeerService) { }

  ngOnInit() {
    this.beer = new Beer();

    this.id = this.route.snapshot.params['id'];
    
    this.beerService.getBeer(this.id)
      .subscribe(data => {
        console.log(data)
        this.beer = data;
      }, error => console.log(error));
  }

  updateBeer() {
    this.beerService.updateBeer(this.id, this.beer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.beer = new Beer();
    this.gotoList();
  }

  onSubmit() {
    this.updateBeer();    
  }

  gotoList() {
    this.router.navigate(['/beers']);
  }
}
