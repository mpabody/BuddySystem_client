import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/Trip';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-trip-index',
  templateUrl: './trip-index.component.html',
  styleUrls: ['./trip-index.component.css']
})
export class TripIndexComponent implements OnInit {

  columnNames = ['details', 'StartLocation', 'EndLocation', 'Description', 'BuddyId', 'BuddyName', 'VolunteerId', 'VolunteerName', 'buttons'];

  dataSource: MatTableDataSource<Trip>;

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getAllTrips().subscribe((trips: Trip[]) => {
      this.dataSource = new MatTableDataSource<Trip>(trips);
      console.log(trips);
    });
  }
}
