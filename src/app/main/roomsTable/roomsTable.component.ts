import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { RoomColumnHeader, RoomModel } from '../../core/models/room.model';
import { DataService } from '../../core/services/data.service';
import {BookRoomModalComponent} from "../../core/components/bookRoomModal/bookRoomModal.component";


@Component({
    selector     : 'rooms-table',
    templateUrl  : './roomsTable.component.html',
    styleUrls    : ['./roomsTable.component.scss'],
})
export class RoomsTableComponent implements OnInit, AfterViewInit, OnDestroy {

  private roomsSubscription: Subscription;
  private filteredRoomsSubscription: Subscription;
  private bookModalSubscription: Subscription;
  headers: RoomColumnHeader[] = [
    {
      value: 'type',
      name: 'Номер'
    },
    {
      value: 'count',
      name: 'Количество мест'
    },
    {
      value: 'price',
      name: 'Цена за день'
    }
  ];
  defaultSortingHeader: string = 'type';
  priceColumnValue: string = 'price';
  sortingHeaders: string[] = ['type', 'price'];
  displayedHeaders: any[] = this.headers.map(header => header.value);
  rooms = new MatTableDataSource<RoomModel>([]);
  form = new FormGroup({
    startDate: new FormControl(null, { validators: [Validators.required]}),
    endDate: new FormControl(null, { validators: [Validators.required]})
  });
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.roomsSubscription = this.dataService.getRooms().subscribe(res => {
      this.rooms.data = res;
    });
  }

  ngAfterViewInit(): void {
    this.rooms.paginator = this.paginator;
    this.rooms.sort = this.sort;
  }

  applyDateFilter(): void {
    this.filteredRoomsSubscription = this.dataService.getFilteredRooms(
      this.form.controls.startDate.value,
      this.form.controls.endDate.value
    ).subscribe(res => {
      this.rooms.data = res;
    });
  }

  openModal(row: RoomModel) {
    const modalRef = this.dialog.open(BookRoomModalComponent);

    modalRef.componentInstance.room = row;

    this.bookModalSubscription = modalRef.componentInstance.bookRoom.subscribe(() => {
    })

  }

  ngOnDestroy(): void {
    this.roomsSubscription.unsubscribe();
    this.filteredRoomsSubscription.unsubscribe();
    this.bookModalSubscription.unsubscribe();
  }
}
