import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from '../models/Trip';
import { AdditionalBuddy } from '../models/AdditionalBuddy';
import { APIURL } from 'src/environments/environment.prod';


const Api_Url = APIURL

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  getAllTrips() {
    return this.http.get(`${Api_Url}/api/trip/TripsForAllUsers`, { headers: this.getHeaders() });
  }

  getTrip(id) {
    return this.http.get(`${Api_Url}/api/trip/${id}`, { headers: this.getHeaders() });
  }
  getTripsForCurrentUser() {
    return this.http.get(`${Api_Url}/api/trip/TripsForCurrentUser`, { headers: this.getHeaders() });
  }

  createTrip(trip: Trip) {
    return this.http.post(`${Api_Url}/api/trip/CreateTrip`, trip, { headers: this.getHeaders() })
  }

  updateTrip(trip: Trip) {
    return this.http.put(`${Api_Url}/api/trip`, trip, { headers: this.getHeaders() });
  }

  deleteTrip(id: number) {
    return this.http.delete(`${Api_Url}/api/trip/${id}`, { headers: this.getHeaders() });
  }

  addAdditionalBuddy(additionalBuddy: AdditionalBuddy) {
    return this.http.post(`${Api_Url}/api/trip/AddAdditionalBuddy`, additionalBuddy, { headers: this.getHeaders() });
  }

  getAdditionalBuddy(additionalBuddyId) {
    return this.http.get(`${Api_Url}/api/trip/GetAdditionalBuddy?additionalBuddyId=${additionalBuddyId}`, { headers: this.getHeaders() });
  }

  removeAdditionalBuddy(id: number) {
    return this.http.delete(`${Api_Url}/api/trip/RemoveAdditionalBuddy/${id}?buddyId=${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
