import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgIfComponent implements OnInit {

  @Input() ngIfValue;
  constructor() { }

  ngOnInit() {
  }

}
