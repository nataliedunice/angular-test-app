import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { filteredRoomsByDateMock, roomsMock } from './mocks/roomsMock';
import { RoomModel } from '../../core/models/room.model';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getRooms(): Observable<RoomModel[]> {
    // return this.http.get<RoomModel[]>('roomsUrl');
    return of(roomsMock);
  }

  getFilteredRooms(startDate: string, endDate: string): Observable<RoomModel[]> {
    // return this.http.get<RoomModel[]>(`roomsUrl?startDate=${startDate}&endDate=${endDate}`);
    return of(filteredRoomsByDateMock);
  }

}
