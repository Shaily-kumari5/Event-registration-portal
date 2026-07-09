import { Injectable } from '@angular/core';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private storageKey = 'participants';

  constructor() {}

  getParticipants(): Participant[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addParticipant(participant: Participant): void {
    const participants = this.getParticipants();
    participants.push(participant);
    localStorage.setItem(this.storageKey, JSON.stringify(participants));
  }

  deleteParticipant(id: number): void {
    const participants = this.getParticipants().filter(
      participant => participant.id !== id
    );

    localStorage.setItem(this.storageKey, JSON.stringify(participants));
  }
}