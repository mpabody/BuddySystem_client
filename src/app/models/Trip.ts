import { AdditionalBuddy } from './AdditionalBuddy'
export interface Trip{
    TripId: number;
    StartTime: Date;
    BuddyId: number;
    BuddyName: string;
    VolunteerId: number;
    VolunteerName: string;
    StartLocation: string;
    ProjectedEndLocation: string;
    EndLocation: string;
    EndTime: Date;
    Description?: string;
    AdditionalBuddies?: AdditionalBuddy[];
}