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

  formData: any;
  setFormData(formData: any) {
    this.formData = formData;
  }
  getFormData() {
    return this.formData;
  }

  public showDialog(formData: any) {
    this.formData = formData;
    return this.dialog.open(ConfirmDialogComponent);
  }

  public closeDialog() {
    return this.dialog.closeAll();
  }
}
