import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit{
  @Input() type: string
  @Input() name: string
  @Input() placeholder: string
  @Input() label: string
  @Input() ngModel: NgModel

  ngOnInit() {
    console.log(this.type, this.label, this.placeholder, this.type, this.name)
  }
}
