import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../services/items.service";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [
    ItemsService
  ]
})
export class ItemsComponent implements OnInit {
  items;
  total;
  addItem: Subject<any> = new Subject();
  filters = {
    itemsPerPage: 5,
  };
  constructor(public itemsService: ItemsService) {
    this.fetchItems()

    this.addItem.subscribe((data)=>{
      this.itemsService.add(data).subscribe((resp) => {
        this.fetchItems()
      })
    })
  }

  removeItem(id) {
    this.itemsService
      .remove(id)
      .subscribe((resp) => {
      this.fetchItems();
    })
  }
  ngOnInit() {
  }
  updateFilters(filters) {
    this.filters = {...this.filters, ...filters};
      this.fetchItems(filters);
  }
  updateFilterItemPerPage(value) {
    this.filters = {...this.filters, itemsPerPage: value.target.value};
    this.fetchItems(value);

  }
  public fetchItems(filters?) {
    this.itemsService
      .fetch(this.filters)
      .subscribe((resp)=> {
      console.log(resp.total);
        this.items = resp.data;
        this.total = resp.total;
      })
  }

}
