import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/Trip';
import { AdditionalBuddy } from 'src/app/models/AdditionalBuddy';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  trip: Trip;
  
  constructor(private activatedRoute: ActivatedRoute, private tripService: TripService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.tripService.getTrip(routeData.get('id')).subscribe((trip: Trip) => {
        this.trip = trip;
        console.log(trip);
      });
    });
  }

}
