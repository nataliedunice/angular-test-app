import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { RoomsTableComponent } from './main/roomsTable/roomsTable.component';
import { DataService } from './core/services/data.service';
import { BookRoomModalComponent } from './core/components/bookRoomModal/bookRoomModal.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomsTableComponent,
    BookRoomModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [DataService, HttpClient, MatPaginator],
  bootstrap: [AppComponent]
})

export class AppModule { }
