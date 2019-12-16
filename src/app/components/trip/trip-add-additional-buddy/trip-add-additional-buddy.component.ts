import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ControlContainer } from '@angular/forms';
import { TripService } from 'src/app/services/trip.service';
import { Router } from '@angular/router';
import { Buddy } from 'src/app/models/Buddy';
import { BuddyService } from 'src/app/services/buddy.service';


@Component({
  selector: 'app-trip-add-additional-buddy',
  templateUrl: './trip-add-additional-buddy.component.html',
  styleUrls: ['./trip-add-additional-buddy.component.css']
})
export class TripAddAdditionalBuddyComponent implements OnInit {

  addAdditionalBuddyForm: FormGroup;

listOfBuddies: Buddy[];
id: number;

  constructor(private form: FormBuilder, private tripService: TripService, private router: Router, private buddyService: BuddyService) {
    this.createForm();
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
