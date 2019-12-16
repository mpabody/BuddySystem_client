import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuddyService } from 'src/app/services/buddy.service';
import { Buddy } from 'src/app/models/Buddy';

@Component({
  selector: 'app-buddy-detail',
  templateUrl: './buddy-detail.component.html',
  styleUrls: ['./buddy-detail.component.css']
})
export class BuddyDetailComponent implements OnInit {

  buddy: Buddy;

  constructor(private activatedRoute: ActivatedRoute, private buddyService: BuddyService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.buddyService.getBuddy(routeData.get('id')).subscribe((buddy:Buddy) => {
        this.buddy = buddy;
      });
    });
  }

}
