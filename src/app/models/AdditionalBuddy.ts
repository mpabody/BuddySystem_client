import { Buddy } from './Buddy'
import { Trip } from './Trip';
export interface AdditionalBuddy{
    AdditionalBuddyId?: number;
    BuddyId: number;
    Buddy: Buddy;
    TripId: number;
    Trip: Trip;
}