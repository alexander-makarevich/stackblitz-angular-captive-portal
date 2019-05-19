import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

export interface Parameters {
  title: string;
}

export interface Styles {
  backgroundColor: string;
  fontSize: string;
}

export enum Style {
  BackgroundColor,
  FontSize,
}

export type Css = string;

export enum Color {
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Green = 'green',
  Blue = 'blue',
  Indigo = 'indigo',
  Violet = 'violet',
}

@Injectable()
export class DemoService {
  private styles: Styles = {
    backgroundColor: 'default-backgroundColor',
    fontSize: 'default-fontSize',
  };
  private parametersSource: Subject<Parameters> = new Subject<Parameters>();
  private stylesSource: Subject<Styles> = new Subject<Styles>();
  private cssSource: Subject<Css> = new Subject<Css>();

  public parameters$: Observable<Parameters> = this.parametersSource.asObservable();
  public styles$: Observable<Styles> = this.stylesSource.asObservable();
  public css$: Observable<Css> = this.cssSource.asObservable();
  public changeBackgroundColorStyle(color: Color): void {
    alert(`DemoService.changeBackgroundColorStyle()`);
    this.changeStyle(Style.BackgroundColor, color);
  }
  public changeFontSizeStyle(): void {
    alert(`DemoService.changeFontSizeStyle()`);
    this.changeStyle(Style.FontSize, 'fontSize');
  }
  private changeStyle(style: Style, value: any): void {
    console.log(`DemoService.changeStyle(${style}, ${value})`);
    switch (style) {
      case Style.BackgroundColor: this.styles.backgroundColor = value; break;
      case Style.FontSize: this.styles.fontSize = value; break;
    }
    const css: Css = JSON.stringify(this.styles);
    this.cssSource.next(css);
    this.stylesSource.next(this.styles);
  }
}