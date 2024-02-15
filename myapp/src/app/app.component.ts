import { Component, Input, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedService } from './shared.service';
import 'bootstrap/dist/css/bootstrap.min.css';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'myapp';
  customers:any=[];
  private service = inject(SharedService)
  constructor(){}
  ngOnInit(): void {
    this.service.GetCustomers().subscribe(data=> {
      this.customers= data;
    });
    console.log(this.customers);
  } 
}
