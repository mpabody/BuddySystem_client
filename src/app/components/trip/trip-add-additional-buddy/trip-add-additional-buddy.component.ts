import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ControlContainer } from '@angular/forms';
import { TripService } from 'src/app/services/trip.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Buddy } from 'src/app/models/Buddy';
import { BuddyService } from 'src/app/services/buddy.service';
import { Trip } from 'src/app/models/Trip';


@Component({
  selector: 'app-trip-add-additional-buddy',
  templateUrl: './trip-add-additional-buddy.component.html',
  styleUrls: ['./trip-add-additional-buddy.component.css']
})
export class TripAddAdditionalBuddyComponent implements OnInit {

  addAdditionalBuddyForm: FormGroup;
  trip: Trip;
  listOfBuddies: Buddy[];
  id: number;

  constructor(private form: FormBuilder, private tripService: TripService, private router: Router, private activatedRoute: ActivatedRoute, private buddyService: BuddyService) {
    this.createForm();

    this.activatedRoute.paramMap.subscribe(routeData => {
      this.tripService.getTrip(routeData.get('id')).subscribe((trip: Trip) => {
        this.addAdditionalBuddyForm.setControl("TripId", new FormControl(trip.TripId));
        console.log(trip.TripId);
      });
    });
    
    
    //this.addAdditionalBuddyForm.setControl("TripId", new FormControl(this.trip.TripId));

      this.buddyService.getAllBuddies().subscribe((buddies: Buddy[]) => {
        this.listOfBuddies = buddies;
      });
    }

  ngOnInit() {
    }

createForm() {
      this.addAdditionalBuddyForm = this.form.group({
        BuddyId: new FormControl,
        TripId: new FormControl
      })
    }

  onSubmit() {
      this.tripService.addAdditionalBuddy(this.addAdditionalBuddyForm.value).subscribe(() => {
        this.router.navigate(['/trip/TripsForCurrentUser'])
      })
    }
}
