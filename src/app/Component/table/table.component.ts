import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'Technology-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  value: string | undefined;
  //   this variable is for primeng switch
  checked: boolean = false;
  //   Data of the customer which in real project will get from Backend as API's Shape
  customers: [] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    //   Get the data from the API
    this.http.get('assets/response.json').subscribe((data: any) => {
      this.customers = data;
    });
  }

}
