import { Component, OnInit } from '@angular/core';
import { BuddyService } from 'src/app/services/buddy.service';
import { Buddy } from 'src/app/models/Buddy';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buddy-current-user',
  templateUrl: './buddy-current-user.component.html',
  styleUrls: ['./buddy-current-user.component.css']
})
export class BuddyCurrentUserComponent implements OnInit {

buddy: Buddy;

  constructor(private buddyService: BuddyService, private router: Router) { }

  ngOnInit() {
    this.buddyService.getCurrentUserBuddy().subscribe((buddy: Buddy) => {
      this.buddy = buddy;
      //this.buddyService.getBuddy(buddy.BuddyId);
    });
  }

}
