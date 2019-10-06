import { Beer } from '../beer';
import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from '../beer.service';
import { BeerListComponent } from '../beer-list/beer-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['beers']);
  }
}
