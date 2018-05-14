import { Component, Input } from '@angular/core'
import { DialogService } from '../../dialog.service'

@Component({
  selector: 'message-text-box',
  templateUrl: './message-text-box.component.html',
  styleUrls: ['./message-text-box.component.css']
})

export class MessageTextBoxComponent {
  textMessage: String

  @Input() userId: String
  @Input() opponentId: String

  constructor(private dialogService: DialogService) {}

  sendMessage() {
    this.dialogService.sendMessage({
      text: this.textMessage,
      from: this.userId,
      to: this.opponentId,
      timestamp: "",
      status: false
    }).subscribe(
      (data: any) => console.log(data),
      error => console.log(error)
  );
  }
}
