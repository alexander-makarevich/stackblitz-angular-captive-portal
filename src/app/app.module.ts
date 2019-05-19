import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CaptivePortalComponent } from './captive-portal/captive-portal.component';
import { PagePreviewComponent } from './captive-portal/page-preview/page-preview.component';
import { PageChooserComponent } from './captive-portal/page-chooser/page-chooser.component';
import { CommonStylesForPagesComponent } from './captive-portal/common-styles-for-pages/common-styles-for-pages.component';
import { ColorPickerDialogComponent } from './captive-portal/color-picker-dialog/color-picker-dialog.component';
import { DemoService } from './captive-portal/demo.service';
import { MaterialModule } from './material.module';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, MaterialModule, ReactiveFormsModule ],
  declarations: [ AppComponent, CaptivePortalComponent, PagePreviewComponent, PageChooserComponent, CommonStylesForPagesComponent, ColorPickerDialogComponent ],
  entryComponents: [ ColorPickerDialogComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DemoService]
})
export class AppModule { }
