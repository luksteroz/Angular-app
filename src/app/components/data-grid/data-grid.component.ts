import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  @Input() items: any[];
  @Input() config;
  @Output() removeEvent:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  remove(id) {
    this.removeEvent.emit(id);
  }
}
