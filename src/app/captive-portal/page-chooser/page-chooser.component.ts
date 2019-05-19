import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-chooser',
  templateUrl: './page-chooser.component.html',
  styleUrls: ['./page-chooser.component.css']
})
export class PageChooserComponent implements OnInit {
  public pages: string[] = [];

  public ngOnInit(): void {
    this.pages = ['page1', 'page2', 'page3'];
  }
  public selectPage(page): void {
    console.log(`PageChooserComponent.selectPage(page): page='${page}'`);
  }
}