import { Component, OnInit } from '@angular/core';
import { BuddyService } from 'src/app/services/buddy.service';
import { Buddy } from 'src/app/models/Buddy';
import { 
        MatTableDataSource,
       } from '@angular/material';


@Component({
  selector: 'app-buddy-index',
  templateUrl: './buddy-index.component.html',
  styleUrls: ['./buddy-index.component.css']
})
export class BuddyIndexComponent implements OnInit {

columnNames = ['details', 'Name', 'CurrentLocation', 'IsApproved', 'IsMale', 'Age', 'buttons'];

dataSource: MatTableDataSource<Buddy>;

  constructor(private buddyService: BuddyService) { }

  ngOnInit() {
    this.buddyService.getAllBuddies().subscribe((buddies: Buddy[])=>{
      this.dataSource = new MatTableDataSource<Buddy>(buddies);
    });
  }

}
