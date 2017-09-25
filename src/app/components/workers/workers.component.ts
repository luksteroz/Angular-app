import { Component, OnInit } from '@angular/core';
import {WorkersService} from "../../services/workers.service";

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css'],
  providers: [
    WorkersService
  ]
})
export class WorkersComponent implements OnInit {
  workers;
  constructor(private workersService: WorkersService) {
    this.workersService
      .fetch()
      .subscribe((resp)=> {
        console.log(resp);
        this.workers = resp.data;
      })
  }
  // removeWorker(id) {
  //   this.workersService
  //     .remove(id)
  //     .subscribe((resp) => {
  //       debugger;
  //     })
  // }
  ngOnInit() {
  }

}
