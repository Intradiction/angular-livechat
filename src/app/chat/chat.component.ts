import { Channel, channels } from './../messages';
import { MessageComponent } from './../message/message.component';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { ChatService } from '../chat.service';
import { CommonModule } from '@angular/common';

import { Message } from '../messages';
import { ChannelComponent } from "../channel/channel.component";

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.css',
    imports: [CommonModule, MessageComponent, ReactiveFormsModule, NbLayoutModule, NbSidebarModule, NbCardModule, NbLayoutModule, NbInputModule, NbFormFieldModule, NbIconModule, NbButtonModule, ChannelComponent]
})
export class ChatComponent {

  channels: Channel[] = this.chatService.getAllChannels();
  currentChannel = this.chatService.getCurrentChannel();

  msgText = new FormControl('');

  constructor(
    private chatService: ChatService
  ) {}

  switchChannel(channel: Channel) {
    this.chatService.switchChannel(channel);
    this.currentChannel = this.chatService.getCurrentChannel();
    console.log("Current channel: "+this.chatService.getCurrentChannel().name);
  }

  sendMessage() {
    const msg: Message = {
      sender: 'You',
      text: this.msgText.value || ''
    };
    this.chatService.sendMessage(msg);
    console.log(this.chatService.getMessageHistory());
  }
}
