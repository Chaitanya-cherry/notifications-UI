import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

// Define the data interface for the table
export interface MessageData {
  sno: number;
  referenceName: string;
  saleReturnID: string;
  otp: string;
  createdDateTime: string;
  createdBy: string;
}

// Define the table data (You can replace it with your actual data source later)
const MESSAGE_DATA: MessageData[] = [
  {
    sno: 1,
    referenceName: 'Chaitu',
    saleReturnID: 'SR12345',
    otp: '987654',
    createdDateTime: '2024-09-18 10:30 AM',
    createdBy: 'Admin',
  },
  {
    sno: 2,
    referenceName: 'chaitanya',
    saleReturnID: 'SR67890',
    otp: '654321',
    createdDateTime: '2024-09-18 11:00 AM',
    createdBy: 'Manager',
  },
  // Add more entries as needed
];

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './tables.component.html',
})
export class AppTablesComponent {
  // Define the displayed columns for the new table structure
  displayedColumns1: string[] = ['sno', 'message'];
  dataSource1 = MESSAGE_DATA;

  // Optional: You can implement additional methods here for handling table data
}
// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { MatCardModule } from '@angular/material/card';
// import { MatTableModule } from '@angular/material/table';
// import { MatIconModule } from '@angular/material/icon';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatButtonModule } from '@angular/material/button';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// // Define the data interface for the table
// export interface MessageData {
//   sno: number;
//   referenceName: string;
//   saleReturnID: string;
//   otp: string;
//   createdDateTime: string;
//   createdBy: string;
// }

// @Component({
//   selector: 'app-tables',
//   standalone: true,
//   imports: [
//     MatTableModule,
//     CommonModule,
//     MatCardModule,
//     MatIconModule,
//     MatMenuModule,
//     MatButtonModule,
//   ],
//   templateUrl: './tables.component.html',
// })
// export class AppTablesComponent implements OnInit {
//   // Define the displayed columns for the new table structure
//   displayedColumns1: string[] = ['sno', 'message'];
//   dataSource1: MessageData[] = []; // Empty initially, will be filled by data from backend

//   // Inject HttpClient to make API calls
//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     // Fetch data from the backend API and update the data source
//     this.getOTPEntries().subscribe((data: MessageData[]) => {
//       this.dataSource1 = data;
//     });
//   }

//   // Method to fetch OTP Entries from the backend
//   getOTPEntries(): Observable<MessageData[]> {
//     // Replace 'your-backend-api-url' with the actual URL of your backend API
//     return this.http.get<MessageData[]>('your-backend-api-url/api/otp-entries');
//   }
// }

