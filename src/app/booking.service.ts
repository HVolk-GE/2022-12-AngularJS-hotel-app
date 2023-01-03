import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  // Für eigenen oder fremden Webserver URL Abaendern in bsp. https://www.example.com/api/...
  bookingsUrl: string = '/api/bookings';

  // Methoden - Encapsulation (Booking):
  getBookings(): Observable<Booking[]> {
    var response = this.httpClient.get<Booking[]>(this.bookingsUrl);
    return response;
  }

  deleteBooking(booking: Booking): Observable<Booking> {
    var response = this.httpClient.delete<Booking>(
      this.bookingsUrl + '/' + booking.id
    );
    return response;
  }

  getBookingById(id: number): Observable<Booking> {
    var response = this.httpClient.get<Booking>(this.bookingsUrl + '/' + id);
    return response;
  }

  addBooking(booking: Booking): Observable<Booking> {
    var response = this.httpClient.post<Booking>(this.bookingsUrl, booking);
    return response;
  }
}
