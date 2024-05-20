import { MessageComponent } from './../message/message.component';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { ChatService } from '../chat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  imports: [CommonModule, MessageComponent, ReactiveFormsModule, NbLayoutModule, NbSidebarModule, NbCardModule, NbLayoutModule, NbInputModule, NbFormFieldModule, NbIconModule, NbButtonModule],
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messageHistory = this.chatService.getMessageHistory();
  msgText = new FormControl('');

  constructor(
    private chatService: ChatService
  ) {}

  sendMsg() {
    console.log(this.msgText.value);
    //console.log(this.msgHistory);
  }
}
