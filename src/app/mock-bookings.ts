import { Booking } from './booking';

export const Bookings: Booking[] = [
  {
    id: 1,
    name: 'Herbert Valides',
    roomNumber: 100,
    startDate: new Date(),
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
    name: 'Silke Masch',
    roomNumber: 103,
    startDate: new Date('2022-12-28'),
    endDate: new Date('2023-1-5'),
  },
];
