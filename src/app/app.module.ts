import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
    { path: 'tickets', component: TicketsListComponent },
    // { path: 'ticket/:id', component: TicketsListComponent },
    //{ path: 'edit', component: EditAppareilComponent },
    {path:'', component:TicketsListComponent}
  ];

@NgModule({
    declarations: [AppComponent, TicketsListComponent],
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
