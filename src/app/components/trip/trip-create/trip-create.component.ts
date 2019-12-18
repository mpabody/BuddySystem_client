import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ControlContainer } from '@angular/forms';
import { TripService } from 'src/app/services/trip.service';
import { Router } from '@angular/router';
import { Buddy } from 'src/app/models/Buddy';
import { BuddyService } from 'src/app/services/buddy.service';


@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.css']
})
export class TripCreateComponent implements OnInit {

  tripForm: FormGroup;

  listOfVolunteers: Buddy[];

  constructor(private form: FormBuilder, private tripService: TripService, private router: Router, private buddyService: BuddyService) {
    this.createForm();
    this.buddyService.getCurrentUserBuddy().subscribe((buddy: Buddy) => {
      this.tripForm.setControl("BuddyId", new FormControl(buddy.BuddyId));
    });
    this.buddyService.getAllVolunteers().subscribe((volunteers: Buddy[]) => {
      this.listOfVolunteers = volunteers;
    });
  }

  ngOnInit() {

  };

  createForm() {
    this.tripForm = this.form.group({
      StartTime: new FormControl,
      BuddyId: new FormControl,
      VolunteerId: new FormControl,
      StartLocation: new FormControl,
      ProjectedEndLocation: new FormControl,
      EndLocation: new FormControl,
      EndTime: new FormControl
    });
  }

  onSubmit() {
    this.tripService.createTrip(this.tripForm.value).subscribe(() => {
      this.router.navigate(['/trip/TripsForCurrentUser']);
    })
  }
}
