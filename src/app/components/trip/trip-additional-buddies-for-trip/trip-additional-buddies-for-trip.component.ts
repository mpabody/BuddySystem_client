import { Component, OnInit, Input } from '@angular/core';
//import { Trip } from 'src/app/models/Trip';
import { AdditionalBuddy } from 'src/app/models/AdditionalBuddy';

@Component({
  selector: 'app-trip-additional-buddies-for-trip',
  templateUrl: './trip-additional-buddies-for-trip.component.html',
  styleUrls: ['./trip-additional-buddies-for-trip.component.css']
})
export class TripAdditionalBuddiesForTripComponent implements OnInit {

  
  @Input() additionalBuddy: AdditionalBuddy;
  constructor() { }

  ngOnInit() {
    console.log(this.additionalBuddy.AdditionalBuddyId)
  }

}
