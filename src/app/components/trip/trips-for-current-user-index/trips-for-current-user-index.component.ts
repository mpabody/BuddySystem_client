import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/Trip';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-trips-for-current-user-index',
  templateUrl: './trips-for-current-user-index.component.html',
  styleUrls: ['./trips-for-current-user-index.component.css']
})
export class TripsForCurrentUserIndexComponent implements OnInit {

  columnNames = ['details', 'StartLocation', 'EndLocation', 'Description', 'BuddyId', 'BuddyName', 'VolunteerId', 'VolunteerName', 'buttons'];

  dataSource: MatTableDataSource<Trip>;

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getTripsForCurrentUser().subscribe((trips: Trip[]) => {
      this.dataSource = new MatTableDataSource<Trip>(trips);
    });
  }
}
