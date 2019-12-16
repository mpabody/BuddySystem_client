import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/Trip';

@Component({
  selector: 'app-trip-delete',
  templateUrl: './trip-delete.component.html',
  styleUrls: ['./trip-delete.component.css']
})
export class TripDeleteComponent implements OnInit {

trip: Trip;

  constructor(private activatedRoute: ActivatedRoute, private tripService: TripService, private router: Router) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.tripService.getTrip(params.get('id')).subscribe((trip: Trip) => {
        this.trip = trip;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this.tripService.deleteTrip(this.trip.TripId).subscribe(() => {
      this.router.navigate(['/trip']);
    });
  }

}
