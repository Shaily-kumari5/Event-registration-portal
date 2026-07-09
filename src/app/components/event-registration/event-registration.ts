import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';
import { EventService } from '../../services/event';
import { Participant } from '../../models/participant';

@Component({
  selector: 'app-event-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './event-registration.html',
  styleUrl: './event-registration.css'
})
export class EventRegistration implements OnInit {

  registrationForm!: FormGroup;

  events: string[] = [
    'Angular Workshop',
    'Hackathon',
    'Web Development',
    'AI & Machine Learning',
    'Java Bootcamp',
    'Python Programming'
  ];

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.registrationForm = this.fb.group({

      participantName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      eventName: [
        '',
        Validators.required
      ],

      mobileNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]
      ]

    });

  }

  onSubmit(): void {

    if (this.registrationForm.invalid) {

      this.registrationForm.markAllAsTouched();

      return;

    }

    const participant: Participant = {

      id: Date.now(),

      participantName: this.registrationForm.value.participantName,

      email: this.registrationForm.value.email,

      eventName: this.registrationForm.value.eventName,

      mobileNumber: this.registrationForm.value.mobileNumber

    };

    this.eventService.addParticipant(participant);

    alert('Participant Registered Successfully!');

    this.registrationForm.reset();

    this.router.navigate(['/manage-records']);

  }

  backToDashboard(): void {

    this.router.navigate(['/dashboard']);

  }

}