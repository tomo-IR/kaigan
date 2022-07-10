import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(private dialog: DialogService) {}
  message: string = '';

  ngOnInit(): void {
    this.message = this.dialog.getMeesage();
  }
}
