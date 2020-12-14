import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {
  public readonly users$: Observable<User[]> = this.backendService.users();
  addTicketForm:FormGroup;
  isSelected:number;
  isCompleted:boolean;
  constructor(private formBuilder: FormBuilder,
    private readonly backendService: BackendService,
    private router: Router) { }

  ngOnInit(): void {
    
  this.addTicketForm = this.formBuilder.group({
    description: ''
  });
  }


  onSubmit(formData){
    console.log(formData);
    this.backendService.newTicket(formData.value).subscribe();
    this.router.navigate(['/']);
  }
}
