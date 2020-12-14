import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';

const appRoutes: Routes = [
    { path: 'tickets', component: TicketsListComponent },
    { path: 'ticket/:id', component: TicketDetailsComponent },
    { path: 'new', component: TicketAddComponent },
    {path:'', component:TicketsListComponent}
  ];

@NgModule({
    declarations: [AppComponent, TicketsListComponent, TicketDetailsComponent, TicketAddComponent],
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
