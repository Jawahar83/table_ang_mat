// Import necessary modules and components
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from '../table.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

// Define the UserData interface to represent table data
export interface UserData {
  rollNo: Number;
  name: string;
  email: string;
  phone: string;
  gender: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Component title
  title = 'table_ang_mat';

  // Define the displayed columns for the table
  displayedColumns: string[] = ['rollNo', 'name', 'email', 'phone', 'gender', 'delete'];

  // Data source for the MatTable
  dataSource!: MatTableDataSource<UserData>;

  // Variable to hold the fetched data from the service
  posts: any;

  // ViewChild decorators to access MatPaginator and MatSort components
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: TableService) {
    // Fetch data from the service using HTTP request
    this.service.getData().subscribe((data) => {
      console.log(data);
      this.posts = data;

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  // Function to apply filtering to the MatTable based on user input
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // Go to the first page of the paginator after applying the filter
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Function to delete a row from the MatTable and the server using the service
  deleteRow(row: any): void {
    console.log(row);
    this.service.deleteData(row.rollNo).subscribe((data) => {
      console.log("Row deleted successfully!");

      // Update the data source after deleting the row
      this.dataSource.data = this.dataSource.data.filter((d) => d !== row);
    });
  }
}
