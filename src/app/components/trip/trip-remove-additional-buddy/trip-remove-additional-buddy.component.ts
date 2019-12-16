import { Component, OnInit } from '@angular/core';
import { AdditionalBuddy } from 'src/app/models/AdditionalBuddy';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';


@Component({
  selector: 'app-trip-remove-additional-buddy',
  templateUrl: './trip-remove-additional-buddy.component.html',
  styleUrls: ['./trip-remove-additional-buddy.component.css']
})
export class TripRemoveAdditionalBuddyComponent implements OnInit {

additionalBuddy: AdditionalBuddy;


  constructor(private activatedRoute: ActivatedRoute, private tripService: TripService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
        this.tripService.getAdditionalBuddy(params.get('additionalBuddyId')).subscribe((additionalBuddy: AdditionalBuddy) => {
        this.additionalBuddy = additionalBuddy;
      })
    })
   }

  ngOnInit() {
  }

  onDelete() {
    this.tripService.removeAdditionalBuddy(this.additionalBuddy.AdditionalBuddyId).subscribe(() => {
      this.router.navigate(['/trip']);
    })
  }
}
