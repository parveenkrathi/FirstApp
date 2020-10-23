import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get().subscribe((data: any[])=>{
      console.log(data);
      this.employees = data;
    })
  }

}