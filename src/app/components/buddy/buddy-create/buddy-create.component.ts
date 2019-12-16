import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BuddyService } from 'src/app/services/buddy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buddy-create',
  templateUrl: './buddy-create.component.html',
  styleUrls: ['./buddy-create.component.css']
})
export class BuddyCreateComponent implements OnInit {

  buddyForm: FormGroup;

  constructor(private form: FormBuilder, private buddyService: BuddyService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.buddyForm = this.form.group({
      Name: new FormControl,
      CurrentLocation: new FormControl,
      IsApproved: new FormControl,
      IsMale: new FormControl,
      Age: new FormControl
    });
  }

  onSubmit() {
    this.buddyService.createBuddy(this.buddyForm.value).subscribe(() => {
      this.router.navigate(['/buddies/current-user']);
    });
  }

}
