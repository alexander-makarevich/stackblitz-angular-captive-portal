import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DemoService, Color } from '../demo.service';
import { ColorPickerDialogComponent } from '../color-picker-dialog/color-picker-dialog.component';

@Component({
  selector: 'app-common-styles-for-pages',
  templateUrl: './common-styles-for-pages.component.html',
  styleUrls: ['./common-styles-for-pages.component.css']
})
export class CommonStylesForPagesComponent implements OnDestroy {
  public backgroundColor = Color.Violet;
  private styles$Subscription;

  constructor(private demoService: DemoService, public dialog: MatDialog) {
    this.styles$Subscription = demoService.styles$.subscribe(styles => {this.backgroundColor = styles.backgroundColor;})
  }

  public changeBackgroundColorStyle(): void {
    const dialogRef = this.dialog.open(ColorPickerDialogComponent, {
      width: '250px',
      data: {color: this.backgroundColor, name: 'background'},
    });
    dialogRef.afterClosed().subscribe(backgroundColor => {
      this.backgroundColor = backgroundColor;
      this.demoService.changeBackgroundColorStyle(backgroundColor);
    });
  }

  ngOnDestroy(): void {
    this.styles$Subscription.unsubscribe();
  }
}