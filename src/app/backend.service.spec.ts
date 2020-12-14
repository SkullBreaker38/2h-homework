import { BackendService } from './backend.service';
import { async, inject, TestBed } from '@angular/core/testing';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';

fdescribe('BackendService', () => {
  let service: BackendService;
  const storedUsers: User[] = [{ id: 111, name: 'Victor' },{ id: 112, name: 'Jack' }];
  const storedTickets: Ticket[] = [
    {
        id: 0,
        completed: false,
        assigneeId: 112,
        description: 'Install a monitor arm'
    },
    {
        id: 1,
        completed: false,
        assigneeId: 111,
        description: 'Move the desk to the new location'
    }
];
beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new BackendService;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(' should return tickets ',
  (done: DoneFn) => {
  service.tickets().subscribe(value => {
    expect(value).not.toBeNull();
    expect(value.length).toBeGreaterThan(0);
    expect(value).toEqual(storedTickets)
    done();
  });
});

it(' should return ticket with id 0 ',
(done: DoneFn) => {
service.ticket(0).subscribe(value => {
  expect(value).not.toBeNull();
  expect(value.id).toEqual(storedTickets[0].id)
  expect(value.completed).toEqual(storedTickets[0].completed)
  expect(value.description).toEqual(storedTickets[0].description)
  expect(value.assigneeId).toEqual(storedTickets[0].assigneeId)
  done();
});
});

})