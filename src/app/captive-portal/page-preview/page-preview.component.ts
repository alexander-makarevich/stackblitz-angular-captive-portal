import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DemoService, Color } from '../demo.service';
import { ColorPickerDialogComponent } from '../color-picker-dialog/color-picker-dialog.component';

@Component({
  selector: 'app-page-preview',
  templateUrl: './page-preview.component.html',
  styleUrls: ['./page-preview.component.css']
})
export class PagePreviewComponent implements OnDestroy {
  private parameters$Subscription;
  private css$Subscription;
  private styles$Subscription;
  public backgroundColor = Color.Yellow;

  public css: string = '<none>';
  public document: string = '<none>';
  constructor(private demoService: DemoService, public dialog: MatDialog) {
    this.parameters$Subscription = demoService.parameters$.subscribe(parameters => {this.loadDocument(parameters);});
    this.css$Subscription = demoService.css$.subscribe(css => {this.loadCss(css);})
    this.styles$Subscription = demoService.styles$.subscribe(styles => {this.backgroundColor = styles.backgroundColor;})
  }

  public loadCss(css): void {
    console.log(`PagePreviewComponent.setCss(css): css='${css}'`);
    this.css = css;
  }

  private loadDocument(parameters): void {
    console.log(`PagePreviewComponent.loadDocument()`, parameters);
    this.document = parameters;
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

  public changeFontSizeStyle(fontSize): void {
    console.log(`PagePreviewComponent.changeFontSizeStyle(fontSize): fontSize='${fontSize}'`);
    this.demoService.changeFontSizeStyle();
  }
  public ngOnDestroy() {
    this.parameters$Subscription.unsubscribe();
    this.css$Subscription.unsubscribe();
    this.styles$Subscription.unsubscribe();
  }
}