import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatSelectModule, MatIconModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatSelectModule, MatIconModule, MatDialogModule],
  exports: [MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatSelectModule, MatIconModule, MatDialogModule],
  declarations: []
})
export class MaterialModule { }