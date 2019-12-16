import { Trip } from './Trip';

export interface Buddy {
    UserId?: number;
    BuddyId?: number;
    Name: string;
    CurrentLocation?: string;
    IsApproved?: boolean;
    IsMale?: boolean;
    Age?: number;
    BuddyTrips?: Trip[];
    VolunteerTrips?: Trip[];
}