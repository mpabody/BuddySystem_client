import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuddyService } from 'src/app/services/buddy.service';
import { Buddy } from 'src/app/models/Buddy';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buddy-edit',
  templateUrl: './buddy-edit.component.html',
  styleUrls: ['./buddy-edit.component.css']
})
export class BuddyEditComponent implements OnInit {

  buddy: Buddy;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private buddyService: BuddyService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.buddyService.getBuddy(params.get('id')).subscribe((buddy: Buddy) => {
        this.buddy = buddy;
        this.createForm();
      });
    });
   }

  ngOnInit() {
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      BuddyId: new FormControl(this.buddy.BuddyId),
      Name: new FormControl(this.buddy.Name),
      CurrentLocation: new FormControl(this.buddy.CurrentLocation),
      IsApproved: new FormControl(this.buddy.IsApproved),
      IsMale: new FormControl(this.buddy.IsMale),
      Age: new FormControl(this.buddy.Age)
    });
  }

  onSubmit() {
    const updatedBuddy: Buddy = {
      BuddyId: this.editForm.value.BuddyId,
      Name: this.editForm.value.Name,
      CurrentLocation: this.editForm.value.CurrentLocation,
      IsApproved: this.editForm.value.IsApproved,
      IsMale: this.editForm.value.IsMale,
      Age: this.editForm.value.Age
    };
    this.buddyService.updateBuddy(updatedBuddy).subscribe(() => {
      this.router.navigate(['/buddies/current-user']);
    });
  }
}
