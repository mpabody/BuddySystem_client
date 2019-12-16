import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuddyService } from 'src/app/services/buddy.service';
import { Buddy } from 'src/app/models/Buddy';

@Component({
  selector: 'app-buddy-delete',
  templateUrl: './buddy-delete.component.html',
  styleUrls: ['./buddy-delete.component.css']
})
export class BuddyDeleteComponent implements OnInit {

  buddy: Buddy;

  constructor(private activatedRoute: ActivatedRoute, private buddyService: BuddyService, private router: Router) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.buddyService.getBuddy(params.get('id')).subscribe((buddy: Buddy) => {
        this.buddy = buddy;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this.buddyService.deleteBuddy(this.buddy.BuddyId).subscribe(() => {
      this.router.navigate(['/buddies']);
    });
  }
}
