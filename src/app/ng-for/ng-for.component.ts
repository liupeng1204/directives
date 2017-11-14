import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgForComponent implements OnInit {
  list: string[]=['1','2','3','4'];
  people: object[]=[
    { name: 'Anderson', age: 35, city: 'Sao Paulo' },
    { name: 'John', age: 12, city: 'Miami' },
    { name: 'Peter', age: 22, city: 'New York' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
