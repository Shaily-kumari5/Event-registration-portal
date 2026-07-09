import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { EventService } from '../../services/event';
import { Participant } from '../../models/participant';

@Component({
  selector: 'app-manage-records',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-records.html',
  styleUrl: './manage-records.css'
})
export class ManageRecords implements OnInit {

  participants: Participant[] = [];

  constructor(
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadParticipants();
  }

  loadParticipants(): void {
    this.participants = this.eventService.getParticipants();
  }

  deleteParticipant(id: number): void {

    if (confirm('Are you sure you want to delete this participant?')) {

      this.eventService.deleteParticipant(id);

      this.loadParticipants();

    }

  }

  goToRegister() {
    this.router.navigate(['/event-registration']);
  }

  backToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}