import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

import { Color } from '../demo.service';

export interface SelectColor {
  value: Color;
  viewValue: string;
}

export interface DialogData {
  name: string;
  color: Color;
}

@Component({
  selector: 'app-color-picker-dialog',
  templateUrl: './color-picker-dialog.component.html',
  styleUrls: ['./color-picker-dialog.component.css']
})
export class ColorPickerDialogComponent {
  private defaultColor: Color = Color.Orange;
  public colors: SelectColor[] = [
    {value: Color.Red, viewValue: 'Red'},
    {value: Color.Orange, viewValue: 'Orange'},
    {value: Color.Yellow, viewValue: 'Yellow'},
    {value: Color.Green, viewValue: 'Green'},
    {value: Color.Blue, viewValue: 'Blue'},
    {value: Color.Indigo, viewValue: 'Indigo'},
    {value: Color.Violet, viewValue: 'Violet'},
  ];
  public color: FormControl = new FormControl(this.defaultColor);
  constructor(
    public dialogRef: MatDialogRef<ColorPickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.color.setValue(data.color);
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public getColor(): Color {
    return this.color.value;
  }

}