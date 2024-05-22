import { Message, messageHistory, Channel, channels } from './messages';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messageHistory: Message[] = messageHistory;

  channels: Channel[] = channels;
  currentChannel = channels[1];

  constructor() { }

  getMessageHistory(channel?: Channel): Message[] {

    if (typeof channel === "undefined") {
      return this.messageHistory;
    } else {
      console.log(channel)
      return channel!.messageHistory;
    }
    
  }

  getCurrentChannel(): Channel {
    return this.currentChannel;
  }

  getAllChannels(): Channel[] {
    return this.channels;
  }

  switchChannel(channel: Channel): void {
    this.currentChannel = channel;
  }
  
  // Currently just appends the message to the messageHistory
  sendMessage(message: Message) {
    this.currentChannel.messageHistory.push(message);
  }
}
