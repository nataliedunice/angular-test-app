import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RoomModel } from '../../models/room.model';


@Component({
    selector     : 'book-room-modal',
    templateUrl  : './bookRoomModal.component.html',
    styleUrls    : ['./bookRoomModal.component.scss'],
})
export class BookRoomModalComponent {

  @Input() room: RoomModel;
  @Output() bookRoom: EventEmitter<any> = new EventEmitter();

  constructor() {}

}
