import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs/Subject";
import {CustomValidators} from "../../utils/custom-validators";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  addItemForm: FormGroup;
  @Input() addItem: Subject<any>;
  modalAddItem;

  constructor(private modalService: NgbModal) {
    this.addItemForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),

      category: new FormControl(''),
      price: new FormControl('', CustomValidators.requiredNumber)
    })
  }
  open(content) {
    this.modalAddItem = this.modalService.open(content);
    this.modalAddItem.result
      .then((data)=>{
        this.addItem.next(data);
      })
      .catch((err)=>{
        console.warn(err);
      })
  }
  check(form){
    if(form.valid) {
      // user zwraca dane
      this.modalAddItem.close(form.value)
    } else {
      console.warn('form invalid');
      this.modalAddItem.dismiss('errrrrrrr')
    }
  }



  ngOnInit() {
  }

}
