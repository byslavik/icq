import { Component, OnInit, Input } from '@angular/core';
import Dialog from '../../../../models/dialog.model'
import { DialogService } from '../../dialog.service'
import { AppService } from '../../../../app.service'

@Component({
  selector: 'dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})

export class DialogComponent implements OnInit {
  public dialog: Dialog = {
    from: "",
    to: "",
    messages: []
  }

  constructor(private dialogService: DialogService, private appService: AppService) {}
  private from: String = ""

  @Input() to: string

  ngOnInit(){  
    this.from = this.appService.getUser()._id;
    this.dialogService.getDialog(this.from, this.to).subscribe((data: Dialog) => this.dialog = data);
  }
}
