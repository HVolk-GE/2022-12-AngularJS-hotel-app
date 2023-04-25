import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

// Server !!
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookings: Booking[] = [
      {
        id: 1,
        name: 'Kalr Meyr',
        roomNumber: 100,
        startDate: new Date('2022-12-22'),
        endDate: new Date('2022-12-31'),
      },
      {
        id: 2,
        name: 'Hans Meyers',
        roomNumber: 101,
        startDate: new Date('2022-12-25'),
        endDate: new Date('2022-12-30'),
      },
      {
        id: 3,
        name: 'Meike Hallersbach',
        roomNumber: 102,
        startDate: new Date('2022-12-10'),
        endDate: new Date('2023-1-15'),
      },
      {
        id: 4,
        name: 'Silke Matsch',
        roomNumber: 103,
        startDate: new Date('2022-12-28'),
        endDate: new Date('2023-1-5'),
      },
    ];

    return { bookings };
  }

  constructor() {}
}
