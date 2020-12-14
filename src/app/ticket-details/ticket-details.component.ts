import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  public readonly users$: Observable<User[]> = this.backendService.users();
  public ticket$: Observable<Ticket>;
  public user$: Observable<User>;
  ticket: Ticket;
  isSelected:number;
  isCompleted:boolean;

  constructor(private readonly backendService: BackendService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const ticketId = +this.route.snapshot.paramMap.get('id')
    
  this.ticket$ = this.backendService.ticket(ticketId);
  this.ticket$.subscribe((value) => {
    if (value) {
      this.ticket = {
        id:value.id,
        assigneeId:value.assigneeId,
        completed:value.completed,
        description:value.description

      };
      this.user$ = this.backendService.user(value.assigneeId);
      this.isSelected = value.assigneeId; // get and set value of  user 
      this.isCompleted = value.completed; // get and set value of  completed 
    }
  })
  }
// set ticket user 
  onChange(selection){
    const id = selection.target.value;
    this.backendService.assign(this.ticket.id,id).subscribe();
    this.router.navigate(['/'])


  }

  // set ticket completed 
  completeTicket(value){
    console.log(value.target.checked);
    this.backendService.complete(this.ticket.id,value.target.checked).subscribe();
    this.router.navigate(['/'])
  }

}
