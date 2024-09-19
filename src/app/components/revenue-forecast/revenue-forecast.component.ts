import { Component, ViewChild } from '@angular/core'; // Add ViewChild import
import { CommonModule } from '@angular/common';  // Required for common Angular functionalities
import { FormsModule } from '@angular/forms';    // Required for ngModel
import { MatCardModule } from '@angular/material/card';    // MatCard for card layout
import { MatFormFieldModule } from '@angular/material/form-field';    // MatFormField for form fields
import { MatSelectModule } from '@angular/material/select';    // MatSelect for dropdowns
import { MatOptionModule } from '@angular/material/core';    // MatOption for select options
import { MatInputModule } from '@angular/material/input';    // MatInput for input fields
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker'; // Import MatDatepickerInputEvent
import { MatNativeDateModule } from '@angular/material/core';    // Native date picker support

interface month {
  value: string;
  viewValue: string;
}

interface DayBalance {
  hyderabad: number;
  vijayawada: number;
  bheemavaram: number;
  kranti: number;
}

@Component({
  selector: 'app-revenue-forecast',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,           // Import the necessary Material modules
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './revenue-forecast.component.html',
})
export class AppRevenueForecastComponent {
  @ViewChild('chart') chart: any;
  
  months: month[] = [
    { value: 'mar', viewValue: 'Sep 2024' },
    { value: 'apr', viewValue: 'Oct 2024' },
    { value: 'june', viewValue: 'Nov 2024' },
  ];

  selectedDate: Date | null = null;

  // Initial day balance data for different locations
  dayBalance: DayBalance = {
    hyderabad: 0,
    vijayawada: 0,
    bheemavaram: 0,
    kranti: 0,
  };

  constructor() {}

  // Function to handle date change and update day balances
  onDateChange(event: MatDatepickerInputEvent<Date>) {  // Use MatDatepickerInputEvent for the date change event
    const selectedDay = event.value;

    if (selectedDay) {
      // Simulate fetching the day balance for the selected day (hardcoded for demonstration)
      this.dayBalance = this.getDayBalance(selectedDay);
    }
  }

  // Function to get day balance based on selected date (you can replace this with actual logic)
  getDayBalance(date: Date): DayBalance {
    // Example logic to return different values based on date (this can be replaced with an API call)
    const dayOfMonth = date.getDate();

    return {
      hyderabad: dayOfMonth * 1000, // Example logic
      vijayawada: dayOfMonth * 800,
      bheemavaram: dayOfMonth * 600,
      kranti: dayOfMonth * 500,
    };
  }
}
