import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @Input() controls: any[];
  @ViewChild('searchForm') form;
  @Output() filtersEvent = new EventEmitter();


  constructor() {
  }


  ngAfterViewInit(): void {
    this.form.valueChanges
      .debounceTime(500)//opoznienie
      .subscribe((value) => {
        console.log(value);
        this.filtersEvent.emit(value);
      })
  }

  ngOnInit() {
  }

}
