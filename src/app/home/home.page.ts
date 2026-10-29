import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent, IonItem, IonLabel, IonInput,
  IonButton, IonBadge, IonAccordionGroup, IonAccordion,
  IonGrid, IonRow, IonCol
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonGrid, 
    FormsModule, NgStyle,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardContent, IonItem, IonLabel, IonInput,
    IonButton, IonBadge, IonAccordionGroup, IonAccordion,
    IonGrid, IonRow, IonCol
  ],
})
export class HomePage {
  // Variables
  studentIdInput = '';
  dailyAttendance = 0;
  presentIds: number[] = [];

  // Teletubbies-inspired pastel colors: purple, green, red, yellow
  colors = ['#f1d6ff', '#edffd6', '#ffd6d6', '#fffcd6'];
  backgroundImages = [
    'assets/backgroundImage.jpg',
    'assets/backgroundImage2.jpg',
    'assets/backgroundImage3.jpg',
    'assets/backgroundImage4.jpg'
  ];
  backgroundImageIndex = 0;

  students = [
    { id: 1, name: 'Juan Dela Cruz', gender: 'Male', course: 'BS Information Technology', year: 3, image: 'assets/p1.jpg' },
    { id: 2, name: 'Maria Santos', gender: 'Female', course: 'BS Information Technology', year: 3, image: 'assets/p2.jpg' },
    { id: 3, name: 'Carlos Reyes', gender: 'Male', course: 'BS Information Technology', year: 3, image: 'assets/p3.jpg' },
    { id: 4, name: 'Angela Garcia', gender: 'Female', course: 'BS Information Technology', year: 3, image: 'assets/p4.jpg' },
    { id: 5, name: 'Mark Villanueva', gender: 'Male', course: 'BS Information Technology', year: 3, image: 'assets/p5.jpg' },
    { id: 6, name: 'Sofia Mendoza', gender: 'Female', course: 'BS Information Technology', year: 3, image: 'assets/p6.jpg' },
    { id: 7, name: 'Daniel Bautista', gender: 'Male', course: 'BS Information Technology', year: 3, image: 'assets/p7.jpg' },
    { id: 8, name: 'Beatrice Navarro', gender: 'Female', course: 'BS Information Technology', year: 3, image: 'assets/p8.jpg' }
  ];

  constructor() {}

  getColor(index: number) {
    return this.colors[index % this.colors.length];
  }

  get backgroundImage() {
    return this.backgroundImages[this.backgroundImageIndex];
  }

  cycleBackgroundTheme() {
    this.backgroundImageIndex = (this.backgroundImageIndex + 1) % this.backgroundImages.length;
  }

    // Runs when the Enter button is clicked
  logAttendance() {
    const id = Number(this.studentIdInput);

    // 1. Must be a valid whole number (not empty, not 1.5, not text)
    if (this.studentIdInput === '' || this.studentIdInput === null || !Number.isInteger(id)) {
      alert('Please enter a valid whole number for the Student ID.');
      return;
    }

    // 2. Must match a student in the list
    let found = false;
    for (const student of this.students) {
      if (student.id === id) {
        found = true;
      }
    }
    if (!found) {
      alert('Unknown Student ID!');
      return;
    }

    // 3. Must not have checked in already
    if (this.isPresent(id)) {
      alert('This student has already checked in!');
      return;
    }

    // Success: record attendance and add 1 to the daily count
    this.presentIds.push(id);
    this.dailyAttendance = this.dailyAttendance + 1;
    this.studentIdInput = '';
    alert('Attendance logged!');
  }

  // True if the student's ID was logged
  isPresent(id: number) {
    return this.presentIds.includes(id);
  }
}