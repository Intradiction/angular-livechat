import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Channel, Message } from './../messages';
import { ChatService } from '../chat.service';
import { MessageComponent } from "../message/message.component";

@Component({
    selector: 'app-channel',
    changeDetection: ChangeDetectionStrategy.Default,
    standalone: true,
    templateUrl: './channel.component.html',
    styleUrl: './channel.component.css',
    imports: [CommonModule, MessageComponent]
})
export class ChannelComponent implements OnInit{
  @Input() channel: Channel | undefined;

  messageHistory!: Message[];

  constructor(
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.messageHistory = this.chatService.getMessageHistory(this.channel);
  }
}
