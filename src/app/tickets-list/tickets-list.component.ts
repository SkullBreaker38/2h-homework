import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  public readonly users$: Observable<User[]> = this.backendService.users();
  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();
  public users: User[];
  constructor(private readonly backendService: BackendService) {}
  

  ngOnInit(): void {
  this.users$.subscribe((users) => {
      this.users = users
    })
  }

  getUserName(id:number): String{
    if (this.users && id) {
      const res = this.users.find((user: User) => user.id === id);
      return res.name;
    }
    return '';
  }

 

}
