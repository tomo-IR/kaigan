import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../component/dialog/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  message: string;
  setMeesage(message: string) {
    this.message = message;
  }
  getMeesage() {
    return this.message;
  }

  public showDialog(message: string) {
    this.message = message;
    return this.dialog.open(ConfirmDialogComponent);
  }
}
