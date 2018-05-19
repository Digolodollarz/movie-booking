import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SeatStatus} from '../_models/seat-status';
import {Seat} from '../_models/seat';
import {Movie} from '../_models/movie';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  theater: any;
  selectedSeats: Seat[] = [];
  movie: Movie;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params));
  }

  ngOnInit() {
    this.theater = {
      name: 'Cine One',
      time: '12:00PM',
      price: 12,
      seats: [
        {
          row: 'A',
          seats: [
            {
              id: 11,
              status: SeatStatus.Available
            }, {
              id: 12,
              status: SeatStatus.Booked
            }, {
              id: 13,
              status: SeatStatus.Available
            }, {
              id: 14,
              status: SeatStatus.Available
            }, {
              id: 15,
              status: SeatStatus.Available
            }, {
              id: 16,
              status: SeatStatus.Available
            }, {
              id: 17,
              status: SeatStatus.Available
            }, {
              id: 18,
              status: SeatStatus.Available
            }, {
              id: 19,
              status: SeatStatus.Available
            }, {
              id: 110,
              status: SeatStatus.Available
            }
          ]
        },
        {
          row: 'B',
          seats: [
            {
              id: 21,
              status: SeatStatus.Available
            }, {
              id: 22,
              status: SeatStatus.Available
            }, {
              id: 23,
              status: SeatStatus.Available
            }, {
              id: 24,
              status: SeatStatus.Available
            }, {
              id: 25,
              status: SeatStatus.Available
            }, {
              id: 26,
              status: SeatStatus.Available
            }, {
              id: 27,
              status: SeatStatus.Available
            }, {
              id: 28,
              status: SeatStatus.Available
            }, {
              id: 29,
              status: SeatStatus.Available
            }, {
              id: 210,
              status: SeatStatus.Available
            }
          ]
        },
        {
          row: 'C',
          seats: [
            {
              id: 31,
              status: SeatStatus.Available
            }, {
              id: 32,
              status: SeatStatus.Available
            }, {
              id: 33,
              status: SeatStatus.Available
            }, {
              id: 34,
              status: SeatStatus.Available
            }, {
              id: 35,
              status: SeatStatus.Available
            }, {
              id: 36,
              status: SeatStatus.Available
            }, {
              id: 37,
              status: SeatStatus.Available
            }, {
              id: 38,
              status: SeatStatus.Available
            }, {
              id: 39,
              status: SeatStatus.Available
            }, {
              id: 310,
              status: SeatStatus.Available
            }
          ]
        },
        {
          row: 'D',
          seats: [
            {
              id: 41,
              status: SeatStatus.Available
            }, {
              id: 42,
              status: SeatStatus.Available
            }, {
              id: 43,
              status: SeatStatus.Available
            }, {
              id: 44,
              status: SeatStatus.Available
            }, {
              id: 45,
              status: SeatStatus.Available
            }, {
              id: 46,
              status: SeatStatus.Available
            }, {
              id: 47,
              status: SeatStatus.Available
            }, {
              id: 48,
              status: SeatStatus.Available
            }, {
              id: 49,
              status: SeatStatus.Available
            }, {
              id: 410,
              status: SeatStatus.Available
            }
          ]
        },
        {
          row: 'E',
          seats: [
            {
              id: 51,
              status: SeatStatus.Available
            }, {
              id: 52,
              status: SeatStatus.Available
            }, {
              id: 53,
              status: SeatStatus.Available
            }, {
              id: 54,
              status: SeatStatus.Available
            }, {
              id: 55,
              status: SeatStatus.Available
            }, {
              id: 56,
              status: SeatStatus.Available
            }, {
              id: 57,
              status: SeatStatus.Available
            }, {
              id: 58,
              status: SeatStatus.Available
            }, {
              id: 59,
              status: SeatStatus.Available
            }, {
              id: 510,
              status: SeatStatus.Available
            }
          ]
        },
        {
          row: 'F',
          seats: [
            {
              id: 61,
              status: SeatStatus.Available
            }, {
              id: 62,
              status: SeatStatus.Available
            }, {
              id: 63,
              status: SeatStatus.Available
            }, {
              id: 64,
              status: SeatStatus.Available
            }, {
              id: 65,
              status: SeatStatus.Available
            }, {
              id: 66,
              status: SeatStatus.Available
            }, {
              id: 67,
              status: SeatStatus.Available
            }, {
              id: 68,
              status: SeatStatus.Available
            }, {
              id: 69,
              status: SeatStatus.Available
            }, {
              id: 610,
              status: SeatStatus.Available
            }
          ]
        },
        {
          row: 'G',
          seats: [
            {
              id: 71,
              status: SeatStatus.Available
            }, {
              id: 72,
              status: SeatStatus.Available
            }, {
              id: 73,
              status: SeatStatus.Available
            }, {
              id: 74,
              status: SeatStatus.Available
            }, {
              id: 75,
              status: SeatStatus.Available
            }, {
              id: 77,
              status: SeatStatus.Available
            }, {
              id: 78,
              status: SeatStatus.Available
            }, {
              id: 79,
              status: SeatStatus.Available
            }, {
              id: 710,
              status: SeatStatus.Available
            }, {
              id: 711,
              status: SeatStatus.Available
            },
          ]
        },
      ]
    };
    this.theater.seats = this.theater.seats.reverse();
    this.movie = {
      title: 'Avengers: Invinity War',
      poster: 'img/poster.jpg',
      rating: 5,
      age: 13
    };
  }

  toggleSeat(seat: Seat, row: string) {
    seat = this.theater.seats.find(_row => _row.row === row).seats
      .find(_seat => _seat.id === seat.id);
    if (seat.status === SeatStatus.Booked) {
      return;
    }
    if (seat.status === SeatStatus.Available) {
      seat.status = SeatStatus.Selected;
      seat.row = row;
      this.selectedSeats.push(seat);
    } else {
      const elementIndex = this.selectedSeats.indexOf(seat);
      this.selectedSeats.splice(elementIndex, 1);
      seat.status = SeatStatus.Available;
    }
    console.log(seat);
    console.log(this.theater.seats);
  }

}
