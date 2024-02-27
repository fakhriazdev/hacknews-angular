// time-utils.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeferentTime {

  convertTimestamp(timestamp: number): string {
    const now = new Date().getTime() / 1000; // Current time in seconds
    const difference = now - timestamp;

    if (difference < 60) {
      return `${Math.floor(difference)} seconds ago`;
    } else if (difference < 3600) {
      return `${Math.floor(difference / 60)} minutes ago`;
    } else if (difference < 86400) {
      return `${Math.floor(difference / 3600)} hours ago`;
    } else {
      return `${Math.floor(difference / 86400)} days ago`;
    }
  }
}
