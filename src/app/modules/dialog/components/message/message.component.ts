import { Component, Input, OnInit } from '@angular/core'
import Message from '../../../../models/message.model'

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  @Input() message: Message

  ngOnInit() {
    console.log(this.message)
  }
}
