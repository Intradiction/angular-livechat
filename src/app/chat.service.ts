import { Message, messageHistory } from './messages';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messageHistory: Message[] = messageHistory;

  constructor() { }

  getMessageHistory() {
    return this.messageHistory;
  }
  
  // Currently just appends the message to the messageHistory
  sendMessage(message: Message) {
    messageHistory.push(message);
  }
}
