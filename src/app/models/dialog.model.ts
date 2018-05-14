import Message from './message.model'

export default class Dialog {
  from: String;
  to: String;
  messages?: Message[];
}