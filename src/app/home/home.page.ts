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
  backgroundColorIndex = 0;

  students = [
    { id: 1, name: 'Juan Dela Cruz', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 2, name: 'Maria Santos', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 3, name: 'Carlos Reyes', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 4, name: 'Angela Garcia', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 5, name: 'Mark Villanueva', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 6, name: 'Sofia Mendoza', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 7, name: 'Daniel Bautista', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 8, name: 'Beatrice Navarro', gender: 'Female', course: 'BS Information Technology', year: 3 }
  ];

  constructor() {}

  // Picks a color based on position (0,1,2,3,0,1,2,3...)
  getColor(index: number) {
    return this.colors[index % this.colors.length];
  }

  get backgroundColor() {
    return this.colors[this.backgroundColorIndex];
  }

  cycleBackgroundTheme() {
    this.backgroundColorIndex = (this.backgroundColorIndex + 1) % this.colors.length;
  }

  // Runs when the Enter button is clicked
  logAttendance() {
    alert('Attendance logged!');
    this.dailyAttendance = this.dailyAttendance + 1;
    this.presentIds.push(Number(this.studentIdInput));
    this.studentIdInput = '';
  }

  // True if the student's ID was logged
  isPresent(id: number) {
    return this.presentIds.includes(id);
  }
}