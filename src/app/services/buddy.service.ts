import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Buddy } from '../models/Buddy';
import { Router } from '@angular/router'
import { APIURL } from 'src/environments/environment.prod';

const Api_Url = APIURL

@Injectable({
  providedIn: 'root'
})
export class BuddyService {

  constructor(private http: HttpClient) { }

  getAllBuddies() {
    return this.http.get(`${Api_Url}/api/buddy`, { headers: this.getHeaders() });
  }

  getAllVolunteers() {
    return this.http.get(`${Api_Url}/api/buddy`, { headers: this.getHeaders() });
  }

  createBuddy(buddy: Buddy) {
    return this.http.post(`${Api_Url}/api/buddy`, buddy, { headers: this.getHeaders() });
  }

  getBuddy(id) {
    return this.http.get(`${Api_Url}/api/buddy/${id}`, {headers: this.getHeaders() });
  }

  getCurrentUserBuddy() {
    return this.http.get(`${Api_Url}/api/buddy/CurrentUserBuddy`, {headers: this.getHeaders()});
  }

  updateBuddy(buddy: Buddy) {
    return this.http.put(`${Api_Url}/api/buddy`, buddy, { headers: this.getHeaders() });
  }

  deleteBuddy(id: number) {
    return this.http.delete(`${Api_Url}/api/buddy/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
